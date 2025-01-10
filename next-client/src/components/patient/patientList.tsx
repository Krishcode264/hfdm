"use client"
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

interface Patient {
  id:string;
  name: string;
  diseases: string[];
  allergies: string[];
  roomNumber: number;
  bedNumber: number;
  floorNumber: number;
  age: number;
  gender: string;
  contactInformation: string;
  emergencyContact: string;
}

const patients: Patient[] = [
  {
    id: "2",

    name: "John Doe",
    diseases: ["Hypertension", "Diabetes"],
    allergies: ["Penicillin"],
    roomNumber: 101,
    bedNumber: 1,
    floorNumber: 1,
    age: 45,
    gender: "Male",
    contactInformation: "+1 (555) 123-4567",
    emergencyContact: "Jane Doe: +1 (555) 987-6543",
  },
  {
    id: "3",
    name: "Alice Smith",
    diseases: ["Asthma"],
    allergies: ["Peanuts", "Latex"],
    roomNumber: 202,
    bedNumber: 2,
    floorNumber: 2,
    age: 32,
    gender: "Female",
    contactInformation: "+1 (555) 234-5678",
    emergencyContact: "Bob Smith: +1 (555) 876-5432",
  },
  // Add more mock patients here...
];

export default function PatientList() {

  const router = useRouter();
  const handlePatientDetailView = (patient:Patient) => {
    router.push(`/admin/patient/${patient.id}`);
  };

  return (
    <div className="container mx-auto py-10 p-4 ">
      <h1 className="text-2xl font-bold mb-4">Patient List</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Diseases</TableHead>
              <TableHead>Allergies</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Bed</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Emergency Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index} onClick={()=>{handlePatientDetailView(patient)}}>
                <TableCell>{patient.name}</TableCell>
                <TableCell className="sm:hidden md:table-cell">
                  {patient.diseases.join(", ")}
                </TableCell>
                <TableCell className="sm:hidden md:table-cell">
                  {patient.allergies.join(", ")}
                </TableCell>
                <TableCell>{patient.roomNumber}</TableCell>
                <TableCell>{patient.bedNumber}</TableCell>
                <TableCell>{patient.floorNumber}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell className="sm:hidden md:table-cell">
                  {patient.contactInformation}
                </TableCell>
                <TableCell className="sm:hidden md:table-cell">
                  {patient.emergencyContact}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
