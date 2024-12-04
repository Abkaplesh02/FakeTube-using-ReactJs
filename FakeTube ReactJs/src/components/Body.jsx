import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () =>{
    return (
        <div className="flex bg-white">
            <SideBar/>
            <MainContainer/>
        </div>
    )
}

export default Body;
