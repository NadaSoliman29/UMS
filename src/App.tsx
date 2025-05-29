
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import AuthLayout from './Components/AuthLayout/AuthLayout'
import NotFound from './Components/NotFound/NotFound'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import UserList from './Components/UserList/UserList'
import AddUser from './Components/AddUser/AddUser'
import Profile from './Components/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import EditUser from './Components/EditUser/EditUser'

function App() {
  const routes =createBrowserRouter ([
    {
      path:"/" , element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true , element:<Login/>},
        {path:"login" , element:<Login/>},

      ]
    },
     {
      path:"dashboard" , element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true , element:<Home/>},
        {path:"Home" , element:<Home/>},
        {path:"User-List" , element:<UserList/>},
        {path:"Adduser" , element:<AddUser/>},
        {path:"Profile" , element:<Profile/>},
     { path: "update-user/:id", element: <EditUser/> },

      ]
    }
    

  ])

  return (
  <>

  <ToastContainer/>
  <RouterProvider router={routes}></RouterProvider>
  </>
  )
}

export default App
