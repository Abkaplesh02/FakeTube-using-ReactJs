const SideBar = () =>{
    return (
        <div className="w-[14rem] bg-white px-6 shadow-2xl h-[100vh]">
            
            <ul className=" text-md border-b-2 py-2 border-gray-500 ">
              <li className="py-2 font-semibold hover:bg-gray-200 px-3 hover:rounded-xl">Home</li>
              <li className="py-2 font-semibold  hover:bg-gray-200 px-3 hover:rounded-xl">Shorts</li>
              <li className="py-2 font-semibold  hover:bg-gray-200 px-3 hover:rounded-xl">Subscriptions</li>  
            </ul>

            <h1 className="py-2 font-semibold px-3">You</h1>
            <ul className="border-b-2 pb-2 border-gray-500">
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">History</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Playlists</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Your videos</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Watch Later</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Liked videos</li>
            </ul>

            <h1 className="py-2 font-semibold px-3">Subscriptions</h1>
            <ul className="border-b-2 pb-2 border-gray-500">
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Harkirat Singh</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Akshay Saini</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Concept && Coding</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">My Ashraya </li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">The Truth Show</li>
            </ul>
        </div>
    )
}

export default SideBar;