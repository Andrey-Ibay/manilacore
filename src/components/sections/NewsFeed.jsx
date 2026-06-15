import { useEffect, useState } from 'react';
export default function NewsFeed(props){
    const [date, setDate] = useState('');
    
    useEffect(()=>{
        if(props.imageKey.date){
            const dateVar = props.imageKey.date;
            console.log(dateVar);
            const [year, month, day] = dateVar.split("-");
        
            const localDate = new Date(year, month - 1, day);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = localDate.toLocaleDateString('en-US', options);
            setDate(formattedDate);
        }
    }, [props]);
    return(
        <div className=" flex flex-col bg-red-500 w-[70%] items-center">
                <h1>
                    This is profile page.
                </h1>
                
                <div className="grid grid-cols-4">
                    {props.images.map((row) => (
                        <div key={row.id}>
                            <img src={props.getImageUrl(row.image_path)} className="rounded-2xl cursor-pointer" onClick={() => {
                                props.setOpenedImage(true);
                                props.setImageKey(row);
                                
                                }}/>
                        </div>
                    ))}
                </div>
                {
                    props.openedImage && (<div className="absolute flex-col bg-blue-600 justify-center items-center">
                        <button onClick={() => props.setOpenedImage(false)}>Exit</button>
                        <div className="flex flex-row">
                            <div className="flex justify-center items-center p-10">
                                <img src={props.getImageUrl(props.imageKey.image_path) || "#"} className="object-cover rounded-2xl w-50 h-50"/>
                            </div>
                            <div className="flex flex-col w-60 p-10">
                                <div className="flex justify-center items-center">
                                    <img src={props.imageKey.avatar_url} className="rounded-full w-10 h-10"/>
                                    <div className="flex-col flex">
                                        <h1>{props.imageKey.user_name}</h1>
                                        <p className="text-sm">{date}</p>
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
    );
}