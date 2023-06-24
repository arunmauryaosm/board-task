import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BiLogoApple } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';

               
const Sign = () => {

  const [value, setValue] = useState('')
  const googleSign = () => {
    signInWithPopup(auth.provider).then((data) => {
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email)
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      navigate('/dashboard')
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      navigate('/dashboard')
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  const navigate = useNavigate(false);


  return (
    <div className='flex w-full h-screen'>
      <div className='w-2/5 bg-black flex items-center justify-center'>
        <p className='text-white text-[72px] font-bold '>Board.</p>
      </div>
      <div className='w-3/5 bg-slate-50 flex items-center justify-center'>
        <div>
          <p className='text-4xl font-bold py-2' >Sign In</p>
          <p className='text-lg pb-6'>Sign in to your account</p>


        <div className='flex text-center gap-5'>
        <Link className='bg-white flex text-gray-500 shadow-md rounded-xl px-4 p-2 gap-1 mb-5 text-ms '>
          <FcGoogle size={20}/> Sign in with Google
        </Link>
        <Link onClick={googleSign} className='bg-white flex text-gray-500 shadow-md rounded-xl px-4 p-2 gap-1 mb-5 text-ms '>
          <BiLogoApple size={20} /> Sign in with Google
        </Link>

        </div>


          <div class="w-full h-fit">
            <form class="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Email address
                </label>
                <input ref={emailRef} class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-gray-300" id="username" type="email" placeholder="Email address" />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input ref={passwordRef} class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-300" id="password" type="password" placeholder="Password" />
                <a class="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
              <div class="flex items-center justify-between">
                <button onClick={signIn} class="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                
              </div>
            </form>
              <p className='text-center'> <spam className="text-slate-400">Don't have an account?</spam>  <Link className="text-blue-500" onClick={register} >Register here</Link>  </p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Sign