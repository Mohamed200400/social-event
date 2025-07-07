import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <main className='mt-4 md:mt-24 '>
            <h2 className='text-center text-3xl font-semibold'>Discover.Connect.Join</h2>
            <p className='text-center text-3xl font-semibold text-gray-400'>Find local events & create you own</p>
            <div className='m-auto w-fit mt-8 '>
                <button className='rounded-4xl px-7 py-2 bg-black text-white mr-3'><Link href={"#"}>Sign Up</Link></button>
                <button className='rounded-4xl px-7 py-2  text-black bg-gray-200'><Link href={"#"}>Log In</Link></button>
            </div>
        </main>
    </div>
  )
}

export default Header