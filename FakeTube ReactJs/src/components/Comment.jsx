import { User } from "../utils/constant";

const Comment= ({data})=>{
    
    const {name,text}=data;
    return(
        <div className="flex my-5 bg-gray-100 p-4">
            <div className="w-[5%]">
                <img className="h-8 " src={User} alt="" />
            </div>
            <div className="w-11/12">
                <h1 className="font-bold text-xl ">{name}</h1>
                <h1 className="text-lg">{text}</h1>
            </div>
        </div>
    )
}

export default Comment;