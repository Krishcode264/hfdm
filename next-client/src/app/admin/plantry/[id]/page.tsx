
import ButtonLink from '@/components/buttonLink';
import { PantryStaffDetailsEditable } from '@/components/pantry/panetryDetailsEditable';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'
const dat={
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York",
    password: "password123",
  }
const page = ({params}:{params:{id:string}}) => {
 
  return (
    <div>
      <ButtonLink uri="/admin"/>
      <PantryStaffDetailsEditable initialStaffData={dat} />
    </div>
  );
}

export default page