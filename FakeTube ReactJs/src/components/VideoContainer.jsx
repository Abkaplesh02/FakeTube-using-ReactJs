import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YoutubeVideoApi } from "../utils/constant";
import { Link } from "react-router-dom";
import useVideoData from "../utils/useVideoData";

const VideoContainer =()=>{

    const videoData=useVideoData();

    if(videoData==null){
        return;
    }


    return (
        <div className="flex flex-wrap justify-evenly">
          {
            videoData.map((data)=><Link key={data.id} to={"/watch?v="+data.id}><VideoCard data={data}/></Link>)
          }
        </div>
    )
}

export default VideoContainer;