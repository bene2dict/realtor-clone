import React, { useState } from 'react'
import {FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import OAuth from '../components/OAuth';
import { supabase } from '../supabase.config';
import { toast } from 'react-toastify';


const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const signInWithEmail = async (e) => {
    e.preventDefault();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    console.error("Sign-in error:", error);
    toast.error("Something went wrong with the Sign in");
    return null;
  } else {
    console.log("Sign-in successful:", data);
    toast.success("Sign in is successful");
    navigate("/");
    return data;
  }
}
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div>
          <img className="rounded-2xl w-full my-6" src="https://plus.unsplash.com/premium_photo-1726863173328-9437d391141a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5fGVufDB8fDB8fHww" alt="signin key" />
        </div>
        <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6 lg:ml-20">
          <form onSubmit={signInWithEmail}  >
            <input className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type="text" id="email" value={email} onChange={onChange} placeholder="Email Address"  />
            
            <div className='relative mb-6'>
            <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="Password"  />
            {showPassword ? (
              <FaEyeSlash className='absolute right-3 text-xl cursor-pointer top-3' onClick={() => setShowPassword((showPassword) => !showPassword)} />
            ) : (
              <FaEye className='absolute right-3 text-xl cursor-pointer top-3' onClick={() => setShowPassword((showPassword) => !showPassword)} />
            )}
            </div>

            <div className='flex justify-between whitespace-nowrap text=sm sm:text-lg'>
              <p className='mb-6'>Don't have an account?
              <Link to="/signup" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-2">Register</Link>  
              </p>

              <p><Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-2"> Forgot password?</Link></p>
            </div>

            <button type='submit' className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Sign-in</button>

            <div className='my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>
                OR
              </p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signin