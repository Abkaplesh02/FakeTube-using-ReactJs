import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () =>{

    const toggle=useSelector((store)=>store.appSlice.toggle);

    return (
        <div className="flex bg-white">
            
            {
                toggle && <SideBar/>
            }
            <Outlet/>
        </div>
    )
}

export default Body;
