"use client";


import ButtonLink from "@/components/buttonLink";
import { PatientDetailsEditable } from "@/components/patient/patientDetails";
import { PlantryStaffDetails } from "@/components/patient/plantryInfo";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import React, { useState } from "react";


const PatientDetails = () => {
const router=useRouter()


const dummyPatientData= {
  name: "John Doe",
  diseases: "Hypertension, Diabetes",
  allergies: "Peanuts, Pollen",
  roomNumber: "305",
  bedNumber: "5",
  floorNumber: "3",
  age: "55",
  gender: "Male",
  contactInfo: "123-456-7890",
  emergencyContact: "987-654-3210",
  morningMeal: "Oatmeal, Boiled Eggs, Orange Juice",
  eveningMeal: "Grilled Chicken, Steamed Vegetables, Rice",
  nightMeal: "Soup, Salad, Whole Wheat Bread",
};

  return (
    <div className="p-4 h-full  overflow-y-scroll  relative ">
      <span>
        <ButtonLink uri="/admin"/>
        <h1 className="text-3xl font-bold mb-6 text-center">Patient Profile</h1>
      </span>

      <div className="flex w-[90%] items-start mx-auto  flex-col md:flex-row justify-between p-3 gap-4 ">
        <PatientDetailsEditable initialPatientData={dummyPatientData} />
        <PlantryStaffDetails
          name="Dr. Zoidberg"
          id="PS001"
          contactInfo="+1 (555) 123-4567"
          location="New New York, Earth"
        />
      </div>
    </div>
  );
};

export default PatientDetails;
