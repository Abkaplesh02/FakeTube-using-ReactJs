import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import store from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import { SpeedInsights } from "@vercel/speed-insights/next"

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
  
])


function App() {
 
  return (
    <Provider store={store}>
    <div>
   
      <Head/>
      <RouterProvider router={appRoute}>
      <Body/>
      </RouterProvider>
    </div>
    </Provider>
     
  )
}

export default App
