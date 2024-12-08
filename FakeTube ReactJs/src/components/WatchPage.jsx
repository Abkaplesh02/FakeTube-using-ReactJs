import { useSearchParams } from "react-router-dom";
import VideoList from "./VideoList";

const WatchPage = () =>{

    const [searchParam]=useSearchParams();
    // console.log(searchParam.get("v"))
    return (
        <div className="ml-[3vw] my-6 w-[100%] flex flex-wrap">
            <div className="w-8/12 bg-gray-400 ">
            <iframe className="rounded-xl w-[100%] h-[70vh] mx-auto"  src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="w-4/12">
            <VideoList />
            
            </div>
        </div>
    )
}

export default WatchPage;