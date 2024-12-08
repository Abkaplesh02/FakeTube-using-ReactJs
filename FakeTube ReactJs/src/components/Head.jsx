import { useDispatch, useSelector } from "react-redux";
import { hamburger, SearchApi, User, YtLogo } from "../utils/constant";
import { toggleMenu } from "../redux/hamburgerSlice";
import { useEffect, useState } from "react";
import { cacheResult } from "../redux/searchSlice";





const Head = () =>{

    const dispatch=useDispatch();

    const handleMenu=()=>{
        dispatch(toggleMenu());
    }


// Search bar operations on search suggestions

    const [search,setSearch]=useState("");
    const [suggestion,setSuggestions]=useState([]);
    const [focus,setFocus]=useState(false);
    const searchQuery =useSelector((store)=>store.search);

    useEffect(()=>{
        
        const timer= setTimeout(()=>{

            if(searchQuery[search]){
                setSuggestions(searchQuery[search]);
            }
            else{
                getSuggestion()
            }
        }
            ,200);

        return(()=>{
            clearTimeout(timer);
        })
    },[search]);


    // function to fetch suggestions
    const getSuggestion= async()=>{
        const data=await fetch(SearchApi+search);
        const json=await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResult({[search]:json[1]}));
        console.log(json[1])

    }



    return (
        
        <div className="sticky top-0 z-50 bg-white shadow-xl grid grid-flow-col p-6">
            

            {/* Logo and hamburger section */}
            <div className="flex col-span-1 ">
                <img onClick={handleMenu} className="h-6 cursor-pointer" src={hamburger} alt="hamburger" />
                <img className="h-6 mx-8" src={YtLogo} alt="LOGO"/>
            </div>
            
            {/* Search bar and microphone */}
            <div className="col-span-10 flex ml-[10vw] relative">
                <div className=" relative w-1/2">
                <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} className=" w-full border  border-gray-400 rounded-l-full pl-6" type="Search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                {focus &&  <ul className="w-full absolute bg-white rounded-xl ">
                    {
                        suggestion.map((e,index)=><li className="pl-1 py-2  border-b-2 border-gray-100 hover:bg-gray-100" key={index}>⌛{e}</li>)
                    }
                </ul>}
                
                
                </div>
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