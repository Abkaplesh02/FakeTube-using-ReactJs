import { useEffect, useState } from "react";
import { generate, makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import ChatMessage from "./ChatMessage";



const LiveChat = () =>{

    const dispatch=useDispatch();
    const storeData=useSelector((store)=>store.chat.messages);
    const [liveMessage,setLiveMessage]=useState("");

    useEffect(()=>{

        const tiemer=setInterval(()=>{
            dispatch(addMessage({
                name:generate(),
                message:makeRandomMessage(60)}));

        },2000);

        return(()=>{
            clearInterval(tiemer);
        })
    },[]);
    return (
        <div className="w-full border-2 border-black">
        
        {
            storeData.map((e,index)=><ChatMessage key={index} name={e.name} message={e.message}/>)
        }

        <form className="w-[100%] pl-2 " onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Abhishek Kaplesh",
                message:liveMessage,
            }))
            setLiveMessage("");
        }}>

        <input type="text" className="w-9/12  py-2 mr-3" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="w-2/12 p-4 bg-gray-300 rounded-xl ">Submit</button>
        </form>
        </div>
    )
}

export default LiveChat;