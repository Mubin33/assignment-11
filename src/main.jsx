import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home.jsx';
import Login from './Page/Login/Login.jsx';
import Register from './Page/Register/Register.jsx'; 
import AuthProvider from "./Firebase/AuthProvider.jsx";
import Services from './Page/Services/Services';
import AddService from './Page/AddService/AddService';
import ManageService from './Page/ManageService/ManageService';
import PrivetRoute from './Components/Loading/PrivetRoute/PrivetRoute.jsx';
import Details from './Page/Details/Details.jsx';
import BookNow from './Page/BookNow/BookNow.jsx';
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import BookedServices from './Page/BookedServices/BookedServices.jsx';
import BookedRequest from './Page/BookedRequest/BookedRequest.jsx';
import UpdateService from './Page/UpdateService/UpdateService.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import Error from './Page/Error/Error.jsx';




const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/addservice',
        element:<PrivetRoute> <AddService/> </PrivetRoute> 
      },
      {
        path:'/manageservice',
        element: <PrivetRoute><ManageService/> </PrivetRoute>
      },
      {
        path:'/bookedservice',
        element: <PrivetRoute><BookedServices/> </PrivetRoute>
      },
      {
        path:'/bookedrequest',
        element: <PrivetRoute><BookedRequest/> </PrivetRoute>
      },
      {
        path:'/details/:id',
        element: <PrivetRoute><Details/> </PrivetRoute>,
        loader:({params}) => fetch(`https://mubins-server-project.vercel.app/service/${params.id}`)
      },
      {
        path:'/booknow/:id',
        element: <PrivetRoute><BookNow/> </PrivetRoute>,
        loader:({params}) => fetch(`https://mubins-server-project.vercel.app/service/${params.id}`)
      },
      {
        path: "/update/:id",
        element:<PrivetRoute> <UpdateService /> </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`https://mubins-server-project.vercel.app/service/${params.id}`),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider> 
    <AuthProvider>
    <RouterProvider router={router} /> 
     </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)
