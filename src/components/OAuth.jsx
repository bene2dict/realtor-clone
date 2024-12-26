import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const OAuth = () => {
  return (
    <button className="flex gap-2 item-center justify-center w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800">
    <FcGoogle className="text-2xl bg-white rounded-full" />
        continue with google
    </button>
  )
}

export default OAuth