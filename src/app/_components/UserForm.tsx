"use client"

import React, {  useState } from 'react'
import { Camera } from "lucide-react";
import type {User,Category} from "@prisma/client";




const UserForm = ({user}:{user:(User & { interests: Category[] })  | null}) => {
  
 
    
  
 
  



  const interests = [
  "music",
  "sports",
  "art",
  "tech",
  "education",
  "food",
  "travel",
  "health",
  "fashion",
  "business",
  "entertainment",
  "lifestyle",
  "camping",
  "gaming"
]
  const user_inter =  user?.interests.map(item => item.name.toLocaleLowerCase());
  console.log(user_inter)
  const [selectedInterests, setSelectedInterests] = useState<string[]>(user_inter ?? []);
  const [imageUrl, setImageUrl] = useState<string | null>( null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className='container flex flex-row flex-wrap'>
      <div className=' flex justify-center items-center '>
        <label className=' justify-center items-center flex border-1 mt-10  w-60 h-60 border-gray-300 rounded-full p-2'>
          <input onChange={handleImageChange} type="file" accept='' className='hidden w-full h-full' /> 
          <div className=' relative opacity-0 hover:opacity-100 w-full h-full flex justify-center items-center'>
            <Camera className="absolute  w-10 h-10 text-gray-700  " />
          </div>
          
          {imageUrl && <img src={user?.image ?? imageUrl} alt="Profile" className="w-full h-full rounded-full object-cover" />} 
        </label>
        
      
      </div>
      <div className=' flex-1 flex-start mt-16 ml-10 '>
      <form className="  mt-10  bg-white ml-16 space-y-4">
      <h2 className="text-2xl font-semibold text-start text-gray-800">Complete Your Profile</h2>

      <div className='w-full'>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          readOnly
          value={user?.name ?? ""}
          placeholder="Enter your name"
          className="w-full rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          readOnly
          value={user?.email ?? ""}
          placeholder="Enter your email"
          className="w-full rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
          Bio
        </label>
        <input
          type="text"
          id="bio"
          name="bio"
          
          defaultValue={user?.bio ?? ""}
          placeholder="Enter your bio"
          className="w-full rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          defaultValue={user?.phone ?? ""}
          placeholder="Enter your phone number"
          className="w-full rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          defaultValue={user?.city ?? ""}
          placeholder="Enter your city"
          className="w-full rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter your interests
        </label>
        <div>
        {interests.map((inter)=>(
          <label key={inter}>
          <span
            className={`inline-flex  my-2 px-3 py-0.5 border-black border-[1px] rounded-3xl items-center mr-4 cursor-pointer ${selectedInterests.includes(inter) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => {
              const value = inter;
              setSelectedInterests((prev) =>
                prev.includes(value)
                  ? prev.filter((interest) => interest !== value)
                  : [...prev, value]
              );
            }}
          >
            
            
            
            {inter}
            </span>
          </label>
        ))}
        </div>
      </div>
      
            
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-2 px-4 rounded transition-colors"
      >
        Save
      </button>
    </form>

      </div>

    </div>
  )
}

export default UserForm

