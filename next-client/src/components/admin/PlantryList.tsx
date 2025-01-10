import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface PantryStaff {
    id:string;
  name: string;
  contactInfo: string;
  location: string;
}

const pantryStaffList: PantryStaff[] = [
  {
    id:"2",
    name: "Michael Scott",
    contactInfo: "+1 (555) 123-7890",
    location: "Kitchen A",
  },
  {
    id:"1",
    name: "Pam Beesly",
    contactInfo: "+1 (555) 456-7891",
    location: "Kitchen B",
  },
  // Add more mock pantry staff here...
];

export default function PantryStaffList() {
      const router = useRouter();
      const handlePatientDetailView = (plantry: PantryStaff) => {
        router.push(`/admin/plantry/${plantry.id}`);
      };
  return (
    <div className="container mx-auto py-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Pantry Staff List</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pantryStaffList.map((staff, index) => (
              <TableRow key={index} onClick={()=>{handlePatientDetailView(staff)}}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.contactInfo}</TableCell>
                <TableCell>{staff.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
