import { useEffect } from "react";
import { generate, makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import ChatMessage from "./ChatMessage";



const LiveChat = () =>{

    const dispatch=useDispatch();
    const storeData=useSelector((store)=>store.chat.messages);

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
        </div>
    )
}

export default LiveChat;