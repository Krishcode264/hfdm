"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, Edit, Save, Trash2 } from "lucide-react";

interface PlanetaryStaffProps {
  name: string;
  id: string;
  contactInfo: string;
  location: string;
}

export function PlantryStaffDetails({
  name,
  id,
  contactInfo,
  location,
 
}: PlanetaryStaffProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStaff, setEditedStaff] = useState({
    name,
    id,
    contactInfo,
    location,
  });


  function onDelete(){

  }
  function onUpdate(){

  }
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedStaff({ ...editedStaff, [e.target.name]: e.target.value });
  };

  return (
    <Card className="mb-6 mx-auto  bg-gray-50 rounded-lg shadow-md w-full md:w-[50%]">
      <CardHeader>
        <CardTitle>Planetary Staff Contact Information</CardTitle>
        <CardDescription>
          Details of the staff member assigned to the patient
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>

          <Badge variant="secondary" className="mt-1">
            ID: {id}
          </Badge>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2 h-4 w-4 opacity-70" />

          <span>{contactInfo}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-4 w-4 opacity-70" />

          <span>{location}</span>
        </div>
        <div className="flex justify-end space-x-2">
          <Button onClick={onDelete} variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Remove Assigned Staff
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}





