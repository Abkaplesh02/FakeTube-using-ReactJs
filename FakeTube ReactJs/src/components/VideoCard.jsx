import { User } from "../utils/constant";

/* eslint-disable react/prop-types */
const VideoCard= ({data})=>{
    console.log(data);

    const{snippet,statistics}=data;
    const{title,channelTitle,thumbnails}=snippet;
    
    return (
        <div className="w-[22rem] mx-auto my-10  rounded-xl">
            <img className="rounded-xl " src={thumbnails.standard.url} alt="" />
            <div className="flex">
                <img className="  my-3 h-8" src={User} alt="" />
            <div>
            <h2 className=" pl-3 font-bold my-3">{title}</h2>
            <h2 className=" pl-3 text-gray-700 my-1 font-sans ">{channelTitle} ✔️</h2>
            <h2 className="pl-3 text-gray-700 my-2">{statistics.viewCount+ " "} Views</h2>
            </div>
            </div>
        </div>
    )
}

export default VideoCard;