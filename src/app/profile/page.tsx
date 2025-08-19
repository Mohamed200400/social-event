
import React from 'react'
import UserForm from '../_components/UserForm'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/auth';
import { db } from '@/lib/prisma';



const page = async() => {
  const session = await getServerSession(authOptions);
  const email = session?.user.email ?? ""
  console.log(email)
  const user = await db.user.findUnique({
    where: { email  },
    include:{
      interests : true,
    }
  });
  
  return (
    <div>
    <UserForm user={user}/>
    
    </div>
  )
}

export default page