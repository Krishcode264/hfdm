
import { PantryStaffDetailsEditable } from '@/components/pantry/panetryDetailsEditable';
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
      <PantryStaffDetailsEditable
  initialStaffData={dat}
      />
    </div>
  );
}

export default page