import { Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../contexts/ContextProvider";

export default function GuestLayouts() {

    const { userToken} = UseStateContext();

    if (userToken) {
        return <Navigate to="/" />
    }
    
    
  return (
    <div>
       <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.944c5d0ef628083bb316f9b3d643385c86bcdb3d.svg"
              className="mx-auto h-10 w-auto"
            />
            
          </div>
  
          <Outlet/>
        </div>
    </div>
  )
}
