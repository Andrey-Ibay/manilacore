'use client';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from 'react-infinite-scroll-component';
import { createClient } from "@/utils/supabase/client";
import Skeleton from "./Skeleton";
import { useEffect, useState } from 'react';

export default function NewsFeed(props){
    
    const [hasMore, setHasMore] = useState(true);

    
    const dateVar = props.imageKey?.date; 

    const formattedDate = dateVar 
    ? new Date(dateVar.split("-")[0], dateVar.split("-")[1] - 1, dateVar.split("-")[2]).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : "No date available";

    console.log(props.images.length);

    console.log("Test user object: ", props.images);
    
    const user_name = props.images.length > 0 ? props.images[0].user_name : "Loading...";
    console.log("Test props id: ", user_name);
    console.log("Test auth id: ", props.userInfo.user_metadata.full_name);
    return(
        <div className="static flex items-center w-[80%] ml-10 justify-center">
                <div className="static h-screen w-full overflow-y-auto">
                    <InfiniteScroll
                        dataLength={props.images.length}
                        next={props.fetchMoreData}
                        hasMore={props.hasMore}
                        loader={<h4>Loading more pins...</h4>}
                    >
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 450: 3, 900: 4}}>
                            <Masonry gutter="16px">
                                {props.images.map((row) => (
                                    <div key={row.id}>
                                        <img src={props.getImageUrl(row.image_path)} className="rounded-2xl cursor-pointer" onClick={() => {
                                            props.setOpenedImage(true);
                                            props.setImageKey(row);
                                            
                                            }}/>
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </InfiniteScroll>
                    <div className="flex justify-center items-center">
                        {
                            (props.userInfo.user_metadata.full_name == props.imageKey.user_name) && props.openedImage && (<div className="absolute flex-col top-1 left-1 bg-white rounded-2xl p-4">
                                <button onClick={() => props.setOpenedImage(false)}>Exit</button>
                                <div className="flex flex-row p-4">
                                    <div className="flex justify-center items-center">
                                        <img src={props.getImageUrl(props.imageKey.image_path)} className="object-cover rounded-2xl w-50 h-50"/>
                                    </div>
                                    <div className="flex flex-col w-80 p-8">
                                        <div className="flex mb-6 items-center">
                                            <img src={props.imageKey.avatar_url} className="object-cover rounded-full w-10 h-10"/>
                                            <div className="flex-col flex">
                                                <h1>{props.imageKey.user_name}</h1>
                                                <p className="text-sm">{formattedDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h2>{props.imageKey.headers}</h2>
                                            <p>{props.imageKey.description}</p>
                                        </div>
                                        <button onClick={() => {
                                            props.deleteImage(props.imageKey.id);
                                            props.setOpenedImage(false);
                                            }}>Delete Image</button>
                                    </div>
                                </div>
                            </div>)
                        }
                        {
                            (props.userInfo.user_metadata.full_name != props.imageKey.user_name) && props.openedImage && (<div className="absolute flex-col top-1 left-1 bg-white rounded-2xl p-4">
                                <button onClick={() => props.setOpenedImage(false)}>Exit</button>
                                <div className="flex flex-row p-4">
                                    <div className="flex justify-center items-center">
                                        <img src={props.getImageUrl(props.imageKey.image_path)} className="object-cover rounded-2xl w-50 h-50"/>
                                    </div>
                                    <div className="flex flex-col w-80 p-8">
                                        <div className="flex mb-6 items-center">
                                            <img src={props.imageKey.avatar_url} className="object-cover rounded-full w-10 h-10"/>
                                            <div className="flex-col flex">
                                                <h1>{props.imageKey.user_name}</h1>
                                                <p className="text-sm">{formattedDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h2>{props.imageKey.headers}</h2>
                                            <p>{props.imageKey.description}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                            </div>)
                        }
                    </div>
                </div>
        </div>
    );
}