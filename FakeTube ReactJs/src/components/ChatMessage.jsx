import { User } from "../utils/constant";

const ChatMessage = ({name,message})=>{
    return (
        <div className="flex my-3 py-2 mx-1 border-b-2 border-gray-500">
            <div className="mr-6">
            <img className="w-6" src={User} alt="" />
            </div>
            <div>
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage;