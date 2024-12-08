import { useDispatch } from "react-redux";
import { hamburger, User, YtLogo } from "../utils/constant";
import { toggleMenu } from "../redux/hamburgerSlice";
import { Link } from "react-router-dom";


const Head = () =>{

    const dispatch=useDispatch();

    const handleMenu=()=>{
        dispatch(toggleMenu());
    }

    return (
        
        <div className="sticky top-0 z-50 bg-white shadow-xl grid grid-flow-col p-6">
            

            {/* Logo and hamburger section */}
            <div className="flex col-span-1 ">
                <img onClick={handleMenu} className="h-6 cursor-pointer" src={hamburger} alt="hamburger" />
                <img className="h-6 mx-8" src={YtLogo} alt="LOGO"/>
            </div>
            
            {/* Search bar and microphone */}
            <div className="col-span-10 flex ml-[10vw]">
                <input className="w-1/2 border  border-gray-400 rounded-l-full pl-4" type="Search" placeholder="Search" />
                <button className="text-red-600  px-5 border border-gray-400 rounded-r-full">🔎</button>
                <img className="h-6 ml-5 cursor-pointer" src="https://cdn1.iconfinder.com/data/icons/audio-and-music/64/microphone_audio_record_youtube_beat-2-512.png" alt="" />
            </div>

            {/* User  */}
            <div className="col-span-1">
                <a href=""><img className="h-6" src={User} alt="UserLogo"/></a>
            </div>

        </div>
    )
}

export default Head;