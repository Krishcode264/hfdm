"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Thermometer, MapPin, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import Api from "@/lib/axios";
import { useApiCall } from "@/hooks/apiCall";
import { postCall } from "@/actions/plantry";

interface PlantryFormData {
  name: string;
  id: string;
  email: string;
  location: string;
  password: string;
  contactInfo: string;
}

export function CreatePlantryForm() {
  const [plantData, setPlantData] = useState<PlantryFormData>({
    name: "",
    id: "",
    email: "",
    location: "",
    password: "",
    contactInfo: "",
  });

  const {
    loading,
    isSuccess,
    error,
    responseData: data,
    callApi,
  } = useApiCall({
    apiCall: postCall("/plantry", plantData),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlantData({ ...plantData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    callApi();
    if (isSuccess) {
      console.log("success creating panty", data);
      setPlantData({email:"",password:"",location:"",id:"",contactInfo:"",name:""})
    }
  };

  return (
    <Card className="mb-6 p-3 mx-auto bg-gray-50 rounded-lg shadow-md w-full md:w-[50%]">
      <CardHeader>
        <CardTitle className="font-semibold text-xl">
          Create New Plantry Staff
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Staff Name</Label>
          <div className="flex items-center">
            <Input
              id="name"
              name="name"
              value={plantData.name}
              onChange={handleChange}
              disabled={loading}
              className="font-semibold text-lg"
              placeholder="Enter Staff name"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Email</Label>
          <div className="flex items-center">
            <Input
              id="email"
              name="email"
              disabled={loading}
              value={plantData.email}
              onChange={handleChange}
              placeholder="Enter Staff location"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">Contact Info</Label>
          <div className="flex items-center">
            <Input
              id="contactInfo"
              name="contactInfo"
              value={plantData.contactInfo}
              disabled={loading}
              onChange={handleChange}
              placeholder="Enter Staff location"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="flex items-center">
            <Input
              id="password"
              name="password"
              value={plantData.password}
              disabled={loading}
              onChange={handleChange}
              placeholder="Enter Staff  password"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="flex items-center">
            <Input
              id="location"
              name="location"
              disabled={loading}
              value={plantData.location}
              onChange={handleChange}
              placeholder="Enter Staff location"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            onClick={handleSave}
            disabled={loading}
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Save className="mr-2 h-4 w-4" />
            {loading ? "Saving " : "Save"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
