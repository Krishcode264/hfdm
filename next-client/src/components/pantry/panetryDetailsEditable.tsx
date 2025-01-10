"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, Edit, Trash2 } from "lucide-react";

interface PlantryFormData {
  name: string;
  email: string;
  password: string;
  location: string;
}

export function PantryStaffDetailsEditable({
  initialStaffData,
}: {
  initialStaffData: PlantryFormData;
}) {
  const [staffData, setStaffData] = useState<PlantryFormData>(initialStaffData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving updated staff data:", staffData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("Deleting staff data:", staffData);
    // Add your deletion logic here
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card className="mb-6 p-6 mx-auto bg-gray-50 rounded-lg shadow-md w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-semibold text-2xl">
          Pantry Staff Details
        </CardTitle>
        <Button
          onClick={toggleEdit}
          variant="outline"
          className={isEditing ? "bg-yellow-100" : ""}
        >
          <Edit className="mr-2 h-4 w-4" />
          {isEditing ? "Cancel Edit" : "Edit Details"}
        </Button>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Staff Name</Label>
            <Input
              id="name"
              name="name"
              value={staffData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={staffData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={staffData.password}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={staffData.location}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="flex justify-between space-x-4">
          <Button
            onClick={handleSave}
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white"
            disabled={!isEditing}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button
            onClick={handleDelete}
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Staff
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
