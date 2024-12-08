import VideoCardWatch from "./VideoCardWatch";
import useVideoData from "../utils/useVideoData";
import { Link } from "react-router-dom";


const VideoList = () =>{

    const videoData=useVideoData();

    if(videoData==null){
        return;
    }
    console.log(videoData);

    return(
        <div className="bg-red-100 border-2 border-black">
            <div>
                <button className="p-2 bg-gray-100 mx-2 px-4 my-3 rounded-xl cursor-pointer" >All</button>
                <button className="p-2 bg-gray-100 mx-2 px-4 my-3 rounded-xl cursor-pointer" >From the series</button>
                <button className="p-2 bg-gray-100 mx-2 px-4 my-3 rounded-xl cursor-pointer" >The engineering digest</button>

                {
                    videoData.map((data)=><Link to={"/watch?v="+data.id}><VideoCardWatch key={data.id} data={data}/></Link>)
                }
                </div>
            
        </div>
    )
}

export default VideoList;