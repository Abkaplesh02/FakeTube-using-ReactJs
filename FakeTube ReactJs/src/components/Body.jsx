import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () =>{

    const toggle=useSelector((store)=>store.appSlice.toggle);

    return (
        <div className="flex bg-white">
            
            {
                toggle && <SideBar/>
            }
            <MainContainer/>
        </div>
    )
}

export default Body;
