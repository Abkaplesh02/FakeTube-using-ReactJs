const SideBar = () =>{
    return (
        // <div className="sticky left-0  w-3/12 bg-white px-6 shadow-2xl ">
        <div className="sticky z-50 top-[74px] left-0 h-[100vh] w-[340px] bg-white px-6 shadow-2xl overflow-y-scroll scroll-smooth scrollbar-hidden hover:scrollbar-visible">
            
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


            <h1 className="py-2 font-semibold px-3">Explore</h1>
            <ul className="border-b-2 pb-2 border-gray-500">
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Trending</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Shopping</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Music</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Films </li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Live</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Gaming</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">News</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Sport</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Courses </li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Fashion & beauty</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Podcasts</li>
            </ul>


            <h1 className="py-2 font-semibold px-3">More from Youtube</h1>
            <ul className="border-b-2 pb-2 border-gray-500">
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Youtube Premium</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Youtube Studio</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Youtube Music</li>
                <li className="py-2  hover:bg-gray-200 px-3 hover:rounded-xl">Youtube Kids</li>
            </ul>

            <ul className=" text-md border-b-2 py-2 border-gray-500 ">
              <li className="py-2 font-semibold hover:bg-gray-200 px-3 hover:rounded-xl">Settings</li>
              <li className="py-2 font-semibold  hover:bg-gray-200 px-3 hover:rounded-xl">Report history</li>
              <li className="py-2 font-semibold  hover:bg-gray-200 px-3 hover:rounded-xl">Help</li>
              <li className="py-2 font-semibold  hover:bg-gray-200 px-3 hover:rounded-xl">Send feedback</li>

            </ul>

            
        </div>
    )
}

export default SideBar;