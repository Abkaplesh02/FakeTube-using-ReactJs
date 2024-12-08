import { User } from "../utils/constant";

const VideoCardWatch = ({data})=>{

    
    const{snippet,statistics}=data;
    const{title,channelTitle,thumbnails}=snippet;

    return (
        <div className="mb-4 ml-4">

            <div className="flex">
                <div className="w-4/12">
            <img className="rounded-xl w-40" src={thumbnails.default.url} alt="" />
            </div>
           
            <div className="w-8/12">
            <h2 className=" pl-3 font-bold text-md my-1">{title}</h2>
            <h2 className=" pl-3 text-gray-700 text-sm my-1 font-sans ">{channelTitle} ✔️</h2>
            <h2 className="pl-3 text-gray-700 my-1 text-sm">{statistics.viewCount+ " "} Views</h2>
            </div>
            </div>

        </div>
    )
}

export default VideoCardWatch;