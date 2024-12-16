import { generate, makeRandomMessage } from "../utils/helper";



const LiveChat = () =>{

    const data=generate();
    console.log(data);

    const dataLong=makeRandomMessage(30);
    console.log(dataLong);
    return (
        <div className="w-full border-2 border-black">
        
        Live chat
        </div>
    )
}

export default LiveChat;