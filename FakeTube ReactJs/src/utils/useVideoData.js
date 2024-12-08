import { useEffect, useState } from "react";
import { YoutubeLikedVideoApi } from "./constant";

const useVideoData=()=>{

    const [videoData,setVideoData]=useState();



    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        const data=await fetch(YoutubeLikedVideoApi);
        const json=await data.json();
        setVideoData(json.items)
        
    }

    return videoData;
}

export default useVideoData;