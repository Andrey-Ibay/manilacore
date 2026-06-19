'use client';

import { useState, useEffect, useRef } from 'react';

import LogoutButton from "@/components/LogoutButton";
import NewsFeed from "@/components/sections/NewsFeed";
import Image from "next/image";
import Skeleton from '@/components/sections/Skeleton';
import { createClient } from "@/utils/supabase/client";
import { processWithGemini } from "@/app/actions/processWithGemini";
import { safetyGuardrail } from '@/app/actions/safetyGuardrail';

export default function ProfilePage(){
    
    const supabase = createClient();

    //State
    const [addCard, setAddCard] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [openedImage, setOpenedImage] = useState(false);
    const [imageKey, setImageKey] = useState({});
    const [images, setImages] = useState([]);
    const [filterCat, setFilterCat] = useState([]);
    const [filterSubCat, setFilterSubCat] = useState([]);
    const [hasPreview, setHasPreview] = useState(false);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [tempImage, setTempImage] = useState("/blank_image.jpg");

    //UseRef hooks for inputs
    const textareaRef = useRef(null);
    const inputHeaderRef = useRef(null);
    const fileInputRef = useRef(null);
    const tempImgHook = useRef("/blank_image.jpg");

    //Renders the specific files of the corresponding user 
    useEffect(() => {
        const fetchData = async () => {
            console.log("useEffect started.")
            const { data: { user }} = await supabase.auth.getUser();
            if(user){
                const { data: allData } = await supabase
                    .from('items')
                    .select('*')

                if(allData){
                    setImages(allData);
                    setUserInfo(user);
                    setLoading(false);
                                
                }
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            console.log("useEffect started.")
            const { data: { user }} = await supabase.auth.getUser();
            if(user){
                
                const { data: allCategories } = await supabase
                    .from('categories')
                    .select('*')

                if(allCategories){
                    const filt = allCategories.filter(row => row.parent_id === null);
                    setFilterCat(filt);
                                
                }
            }
        };
        fetchData();
    }, []);
    
    console.log("Initialtest cat Filtered Category: ", filterCat);


    const settingImages = (setimg) => {
        setImages(setimg);
    }
    const catFilter = (cat) => {
        setFilterCat(cat);
    }
    const subCatFilter = (cat) => {
        setFilterSubCat(cat);
    }
    

    const dateVar = imageKey?.date; 

    const formattedDate = dateVar 
    ? new Date(dateVar.split("-")[0], dateVar.split("-")[1] - 1, dateVar.split("-")[2]).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : "No date available";

    //fetches data for the newsfeed
    const fetchMoreData = async () => {
        
        const { data } = await supabase
        .from('items')
        .select('*')
        .range(page * 2, (page + 1) * 2 - 1);

        if(data){
            console.log("fetchmoredata function is working");
            setImages((prev) => [...images, ...data]);
            setPage((prev) => prev + 1);
        }
    };

    //For showing a temporary file
    const showPreview = (event) => {
        const file = event.target.files[0];
        if(file){
            tempImgHook.current = URL.createObjectURL(file);
            setTempImage(tempImgHook.current);
        }
    }
    //Uploads image to storage bucket.
    const uploadImage = async (file) => {
        //formats file
        const fileExtension = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExtension}`;
        const filePath = `postImages/${fileName}`;

        //uploads image to storage bucket
        const { data, error } = await supabase.storage
            .from("postImages")
            .upload(filePath, file);

        if(error){
            console.log("Failed to upload file: ", error);
        }

        return filePath;
    }

    const deleteImage = async (id) => {
        const {data} = await supabase
            .from("items")
            .delete()
            .eq('id', id);

        const updatedItems = images.filter(item => item !== id);
        setItems(updatedItems);
    }
    //saves the file from the storage bucket in supabase to the table
    const saveToDatabase = async (filePath, file, desc, head) => {
    
        //passes the image to Gemini Flash 3.5 for processing
        //UNCOMMENT AFTER POPULATION
        const geminiCategoryResult = await processWithGemini(file);

        console.log("Gemini output: ", geminiCategoryResult);

        //saves to database
        const { data: {user}} = await supabase.auth.getUser();
        const { data: newRow, error } = await supabase
            .from("items")
            .insert([
                {
                    user_id: user.id,
                    image_path: filePath,
                    category_id: geminiCategoryResult,
                    description: desc,
                    headers: head,
                    user_name: user.user_metadata.full_name,
                    avatar_url: user.user_metadata.avatar_url
                }
            ])
            .select()
            .single();

        if (error){
            console.log("Failed to save to database: ", error);
        }else{
            setImages((setImages) => [...images, newRow]);
        }
    }
    const handleUpload = async () =>{

        console.log("Handle Upload starting...");

        //Description and headers
        const description = textareaRef.current.value;
        const header = inputHeaderRef.current.value;

        //Prepare file for safety check
        const formData = new FormData();
        const files = fileInputRef.current.files;
        const file = files[0];
        formData.append("file", file);

        //Gemini 3.1 Flash Lite as Safety guardrail

        //UNCOMMENT AFTER POPULATION
        const geminiSafetyCheck = await safetyGuardrail(formData);


        //Proceed if it is safe
        if(geminiSafetyCheck){
            try{
                //takes the file path
                const filePath = await uploadImage(file);

                //passes file path to save in the database
                await saveToDatabase(filePath, file, description, header);
                console.log("Success");
                
                removeFile();
                setAddCard(false);
                
            }catch (error){
                console.error("Upload failed: ", error);
            }
        }else{
            alert("Error: Image was rejected by safety guardrail.")
        }

    }
    //Returns the public url of the image in the data bucket
    const getImageUrl = (filePath) => {
        const { data } = supabase.storage
            .from('postImages')
            .getPublicUrl(filePath);
        
        return data.publicUrl;
    }
    //remove attached file
    const removeFile = () => {
        fileInputRef.current.value = '';
        setHasPreview(false);
    }
    
    return(
        <div className="relative flex h-full justify-center pt-40 bg-(--ink) max-[900px]:px-6! max-[900px]:py-15!">    

            {
                !loading ? (<div className="flex items-center flex-col w-[20%] p-4">
                    <div className="pb-2 text-white flex items-center">
                        <img src={userInfo?.user_metadata?.avatar_url || "#"} className="rounded-full w-10 h-10 mr-2" />
                        <h1>{userInfo?.user_metadata?.full_name || userInfo?.user_metadata?.name || <div className="animate-pulse bg-gray-300 h-5 w-20 rounded-2xl"/>}</h1>
                    </div>
                    <button className="text-white border-solid border-1 border-white rounded-l p-4 w-30" onClick={() => setAddCard(true)}>+ New Post</button>
                    <LogoutButton />
                </div>) : (<div className="animate-pulse bg-gray-300 h-[30%] rounded-2xl w-[20%] p-10">
                    <div className="pb-2 flex items-center">
                        <div className="animate-pulse bg-gray-400 rounded-full mr-2 w-10 h-10" />
                        <h1><div className="animate-pulse bg-gray-400 h-5 w-20 rounded-2xl"/></h1>
                    </div>
                    <button><div className="animate-pulse bg-gray-400 h-5 w-30 rounded-2xl"/></button>
                    <button><div className="animate-pulse bg-gray-400 h-5 w-30 rounded-2xl"/></button>
                    
                </div>)
            }
            {
                
                addCard && (<div className="absolute flex bg-white rounded-2xl justify-center items-center">
                    <div>
                        <button onClick={() => {
                            setAddCard(false);
                            removeFile();
                            }
                        }> Exit </button>
                        <Image src={tempImage} width="300" height="200" alt="Preview"/>
                    </div>
                    <div className="flex flex-col">
                        <input type="file" onChange={showPreview} ref={fileInputRef}/>
                        <input className="bg-grey-100" type="text" ref={inputHeaderRef}placeholder="My post" />
                        <textarea  className="bg-grey-100" ref={textareaRef} placeholder="Something to say?"/>
                        <button onClick={handleUpload}>Post</button>
                        <button onClick={removeFile}>Remove File</button>
                    </div>
                </div>)
            }
                
            {
                !loading ? (
                <NewsFeed 
                    userInfo={userInfo}
                    deleteImage={deleteImage}
                    images={images}
                    settingImages={settingImages}
                    filterCat={filterCat}
                    filterSubCat={filterSubCat}
                    catFilter={catFilter}
                    subCatFilter={subCatFilter}
                    fetchMoreData={fetchMoreData}
                    getImageUrl={getImageUrl}
                    setOpenedImage={setOpenedImage}
                    setImageKey={setImageKey}
                    loading={loading}
                />) : (<div className="animate-pulse bg-gray-300 h-[80%] rounded-2xl ml-10 w-[80%]"/>)
            }
            {
                !loading ? ((userInfo.user_metadata.full_name == imageKey.user_name) && openedImage && (<div className="absolute flex-col bg-white rounded-2xl p-4">
                    <button onClick={() => setOpenedImage(false)}>Exit</button>
                    <div className="flex flex-row p-4">
                        <div className="flex justify-center items-center">
                            <img src={getImageUrl(imageKey.image_path)} className="object-cover rounded-2xl w-50 h-50"/>
                        </div>
                        <div className="flex flex-col w-80 p-8">
                            <div className="flex mb-6 items-center">
                                <img src={imageKey.avatar_url} className="object-cover rounded-full w-10 h-10"/>
                                <div className="flex-col flex">
                                    <h1>{imageKey.user_name}</h1>
                                    <p className="text-sm">{formattedDate}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2>{imageKey.headers}</h2>
                                <p>{imageKey.description}</p>
                            </div>
                            <button onClick={() => {
                                deleteImage(imageKey.id);
                                setOpenedImage(false);
                                }}>Delete Image</button>
                        </div>
                    </div>
                </div>)) : (<div className="absolute animate-pulse flex-col top-1 left-1 bg-white rounded-2xl p-4" />)
            }
            {
                !loading ? ((userInfo.user_metadata.full_name != imageKey.user_name) && openedImage && (<div className="absolute flex-col bg-white rounded-2xl p-4">
                    <button onClick={() => setOpenedImage(false)}>Exit</button>
                    <div className="flex flex-row p-4">
                        <div className="flex justify-center items-center">
                            <img src={getImageUrl(imageKey.image_path)} className="object-cover rounded-2xl w-50 h-50"/>
                        </div>
                        <div className="flex flex-col w-80 p-8">
                            <div className="flex mb-6 items-center">
                                <img src={imageKey.avatar_url} className="object-cover rounded-full w-10 h-10"/>
                                <div className="flex-col flex">
                                    <h1>{imageKey.user_name}</h1>
                                    <p className="text-sm">{formattedDate}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2>{imageKey.headers}</h2>
                                <p>{imageKey.description}</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>)) : (<div className="absolute animate-pulse flex-col bg-white rounded-2xl p-4" />)
            }
        </div>
        
    );
}