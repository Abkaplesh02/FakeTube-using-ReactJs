import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YoutubeVideoApi } from "../utils/constant";

const VideoContainer =()=>{

    const [videoData,setVideoData]=useState();


    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        const data=await fetch(YoutubeVideoApi);
        const json=await data.json();
        setVideoData(json.items)
        console.log(json.items);
    }

    if(videoData==null){
        return;
    }


    return (
        <div className="flex flex-wrap">
          {
            videoData.map((data)=><VideoCard key={data.id} data={data}/>)
          }
        </div>
    )
}

export default VideoContainer;