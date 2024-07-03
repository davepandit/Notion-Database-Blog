'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


const Button = () => {
    const router = useRouter()
    //redirect
    const handleRedirect = () => {
        router.push('/')
    }
  return (
    <div>
        <button className='hover:bg-gray-300 text-black rounded-lg px-3 py-2 duration-500 ease-in-out' onClick={handleRedirect}>Go Back</button>
    </div>
  )
}

export default Button