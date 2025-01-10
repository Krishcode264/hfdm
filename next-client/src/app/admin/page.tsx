"use client";

import DomPortal from "@/components/domPortal";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { CirclePlus } from "lucide-react";
import PatientList from "@/components/patient/patientList";
import { DeliveryChart } from "@/components/admin/chart";
import PantryStaffList from "@/components/admin/PlantryList";
import { MealsDeliveredChart } from "@/components/admin/mealsChart";
import OrderList from "@/components/orderList";
import { PlantryStaffDetails } from "@/components/patient/plantryInfo";
import { CreatePlantryForm } from "@/components/pantry/creatPlantry";
import { CreatePatientForm } from "@/components/patient/newPatientForm";
const page = () => {
  const [showSearchPortle, setShowPortal] = useState(false);
  const [addNewPantry, setAddNewPantry] = useState(false);
  const [showCreatePatientForm, setshowCreatePatientForm] = useState(false);
  function closeit() {
    setShowPortal(false);
  }
  const closePantryCreation = () => {
    setAddNewPantry(false);
  };
  const closePatientForm = () => {
    setshowCreatePatientForm(false);
  };
  return (
    <div className="h-full w-full p-4 relative" id="root">
      <header className="sticky z-50 bg-white top-0 flex flex-col md:flex-row gap-4 items-center justify-center p-3 rounded-xl mx-auto border">
        <Button
          onClick={() => {
            setShowPortal(true);
          }}
        >
          Search for Patient or Planatry
          <Search />
        </Button>

        <div className="flex  gap-3">
          <Button
            className=""
            onClick={() => {
              setshowCreatePatientForm(true);
            }}
          >
            <CirclePlus />
            new Patient
          </Button>
          <Button
            className=""
            onClick={() => {
              setAddNewPantry(true);
            }}
          >
            <CirclePlus /> new Panatry
          </Button>
        </div>
      </header>
      {addNewPantry && (
        <DomPortal
          onClose={closePantryCreation}
          component={<CreatePlantryForm />}
        />
      )}
      {showSearchPortle && (
        <DomPortal component={<SearchBar />} onClose={closeit} />
      )}

      {showCreatePatientForm && (
        <DomPortal
          component={<CreatePatientForm />}
          onClose={closePatientForm}
        />
      )}

      <div className="w-full  m-4  gap-4 flex justify-between md:flex-row flex-col    ">
        <div className="md:w-[60%] border p-0 rounded-lg">
          <PatientList />
        </div>

        <div className="flex-1 ">
          <DeliveryChart />
        </div>
      </div>

      <div className="w-full  m-4  gap-4 flex justify-between md:flex-row flex-col   ">
        <div className="md:w-[60%] border rounded-lg">
          <PantryStaffList />
        </div>

        <div className="flex-1 ">
          <MealsDeliveredChart />
        </div>
      </div>
      <div className="rounded-lg border ">
        <OrderList />
      </div>
    </div>
  );
};

export default page;
