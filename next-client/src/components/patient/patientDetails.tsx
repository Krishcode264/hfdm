"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  User,
  Stethoscope,
  AlertTriangle,
  BedDouble,
  Building2,
  Calendar,
  Phone,
  UserPlus,
  Utensils,
  Save,
  Edit,
} from "lucide-react";

interface PatientData {
  name: string;
  diseases: string;
  allergies: string;
  roomNumber: string;
  bedNumber: string;
  floorNumber: string;
  age: string;
  gender: string;
  contactInfo: string;
  emergencyContact: string;
  morningMeal: string;
  eveningMeal: string;
  nightMeal: string;
}

export function PatientDetailsEditable({
  initialPatientData,
}: {
  initialPatientData: PatientData;
}) {
  const [patientData, setPatientData] =
    useState<PatientData>(initialPatientData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (value: string) => {
    setPatientData({ ...patientData, gender: value });
  };

  const handleSave = () => {
    console.log("Saving updated patient data:", patientData);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card className="mb-6 p-6 mx-auto bg-gray-50 rounded-lg shadow-md w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-semibold text-2xl">
          Patient Details
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
            <Label htmlFor="name">Patient Name</Label>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="name"
                name="name"
                value={patientData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="age"
                name="age"
                type="number"
                value={patientData.age}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <RadioGroup
            onValueChange={handleRadioChange}
            value={patientData.gender}
            className="flex space-x-4"
            disabled={!isEditing}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="diseases">Diseases</Label>
          <div className="flex items-center">
            <Stethoscope className="mr-2 h-4 w-4 opacity-70" />
            <Textarea
              id="diseases"
              name="diseases"
              value={patientData.diseases}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="allergies">Allergies</Label>
          <div className="flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4 opacity-70" />
            <Textarea
              id="allergies"
              name="allergies"
              value={patientData.allergies}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="roomNumber">Room Number</Label>
            <div className="flex items-center">
              <BedDouble className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="roomNumber"
                name="roomNumber"
                value={patientData.roomNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bedNumber">Bed Number</Label>
            <div className="flex items-center">
              <BedDouble className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="bedNumber"
                name="bedNumber"
                value={patientData.bedNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="floorNumber">Floor Number</Label>
            <div className="flex items-center">
              <Building2 className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="floorNumber"
                name="floorNumber"
                value={patientData.floorNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactInformation">Contact Information</Label>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="contactInfo"
                name="contactInfo"
                value={patientData.contactInfo}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            <div className="flex items-center">
              <UserPlus className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="emergencyContact"
                name="emergencyContact"
                value={patientData.emergencyContact}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Food/Diet Charts</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="morningMeal">Morning Meal</Label>
              <div className="flex items-center">
                <Utensils className="mr-2 h-4 w-4 opacity-70" />
                <Textarea
                  id="morningMeal"
                  name="morningMeal"
                  value={patientData.morningMeal}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="eveningMeal">Evening Meal</Label>
              <div className="flex items-center">
                <Utensils className="mr-2 h-4 w-4 opacity-70" />
                <Textarea
                  id="eveningMeal"
                  name="eveningMeal"
                  value={patientData.eveningMeal}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nightMeal">Night Meal</Label>
              <div className="flex items-center">
                <Utensils className="mr-2 h-4 w-4 opacity-70" />
                <Textarea
                  id="nightMeal"
                  name="nightMeal"
                  value={patientData.nightMeal}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-2">
            <Button
              onClick={handleSave}
              variant="default"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
