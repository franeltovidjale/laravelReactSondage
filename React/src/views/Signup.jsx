import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import { UseStateContext } from "../contexts/ContextProvider";

export default function Signup() {

  const {setCurrentUser , setUserToken} = UseStateContext();
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirmation,setPasswordConfirmation] = useState('');
  const [error,setError] = useState({__html:''});

  const onSubmit = (ev) => {

    ev.preventDefault();
    setError({__html: ''})

    axiosClient.post('/signup',{
      name: fullName,
      email,
      password,
      password_confirmation : passwordConfirmation
    })
    .then(({ data }) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
    })
    .catch((error) => {
      if(error.response){

      const finalErrors =  Object.values(error.response.data.errors).reduce((accum,next) =>
         [...accum, ...next],[] )

      console.log(finalErrors)

      setError({__html: finalErrors.join('<br>')})
      }
      console.error(error);

    })
  }

    return (
      <>
      
        
         
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Sign up for free
            </h2>

          {error.__html && 
          (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>

          </div>)}  

            <form onSubmit={onSubmit} action="#" method="POST" className="space-y-6 mt-8">
            <div>
                <label htmlFor="email" className="sr-only">
                  Full name
                </label>
               
                <input
                    id="full-name"
                    name="name"
                    type="text"
                    required
                    value={fullName}
                    onChange={ev => setFullName(ev.target.value)}
                   placeholder="Full Name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
               
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"

                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    required
                   
                    placeholder="Email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                
              </div>
  
              <div>
                <div className="">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    required
                 
                    placeholder="Password"

                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                 
                </div>
                
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="sr-only">
                    Password Confirmation
                  </label>
                  <input
                    id="password-confirmation"
                    name="password_confirmation"
                    type="password"
                    value={passwordConfirmation}
                    onChange={ev => setPasswordConfirmation(ev.target.value)}
                    required
                    placeholder="Password Confirmation"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  
                </div>
                
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Or{' '}
              <Link
               to="/login"
               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                 Login with your account
              </Link>
            </p>
          </div>
        
      </>
    )
  }
  