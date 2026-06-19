'use client';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from 'react-infinite-scroll-component';
import DropdownFilter from "../DropdownFilter";
import { createClient } from "@/utils/supabase/client";
import Skeleton from "./Skeleton";
import { useEffect, useState } from 'react';

export default function NewsFeed(props){
    
    const [hasMore, setHasMore] = useState(true);

    console.log(props.images.length);
    console.log("Test user object: ", props.images);
    
    const user_name = props.images.length > 0 ? props.images[0].user_name : "Loading...";
    console.log("Test props id: ", user_name);
    console.log("Test auth id: ", props.userInfo.user_metadata.full_name);

    return(
        <div className="static flex flex-col items-center w-[70%] ml-10 justify-center mr-10">
                <DropdownFilter
                    userInfo={props.userInfo}
                    deleteImage={props.deleteImage}
                    images={props.images}
                    settingImages={props.settingImages}
                    filterCat={props.filterCat}
                    filterSubCat={props.filterSubCat}
                    catFilter={props.catFilter}
                    subCatFilter={props.subCatFilter}
                    fetchMoreData={props.fetchMoreData}
                    getImageUrl={props.getImageUrl}
                    setOpenedImage={props.setOpenedImage}
                    setImageKey={props.setImageKey}
                    loading={props.loading}
                />
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
                                        )
                                    )
                                }
                            </Masonry>
                        </ResponsiveMasonry>
                    </InfiniteScroll>
                    <div className="flex justify-center items-center">
                        
                    </div>
                </div>
        </div>
    );
}