// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   User,
//   Stethoscope,
//   AlertTriangle,
//   BedDouble,
//   Building2,
//   Calendar,
//   Phone,
//   UserPlus,
//   Utensils,
//   Save,
// } from "lucide-react";

// interface PatientFormData {
//   name: string;
//   diseases: string;
//   allergies: string;
//   roomNumber: string;
//   bedNumber: string;
//   floorNumber: string;
//   age: string;
//   gender: string;
//   contactInformation: string;
//   emergencyContact: string;
//   morningMeal: string;
//   eveningMeal: string;
//   nightMeal: string;
// }

// export function CreatePatientForm() {
//   const [patientData, setPatientData] = useState<PatientFormData>({
//     name: "",
//     diseases: "",
//     allergies: "",
//     roomNumber: "",
//     bedNumber: "",
//     floorNumber: "",
//     age: "",
//     gender: "",
//     contactInformation: "",
//     emergencyContact: "",
//     morningMeal: "",
//     eveningMeal: "",
//     nightMeal: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setPatientData({ ...patientData, [e.target.name]: e.target.value });
//   };

//   const handleSelectChange = (value: string, name: string) => {
//     setPatientData({ ...patientData, [name]: value });
//   };

//   const handleSave = () => {
//     console.log("Saving patient data:", patientData);
//   };

//   return (
//     <Card className="mb-6 p-6 mx-auto bg-gray-50 rounded-lg shadow-md w-full max-w-4xl">
//       <CardHeader>
//         <CardTitle className="font-semibold text-2xl">
//           Create New Patient
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="grid gap-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Patient Name</Label>
//             <div className="flex items-center">
//               <User className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="name"
//                 name="name"
//                 value={patientData.name}
//                 onChange={handleChange}
//                 placeholder="Enter patient name"
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="age">Age</Label>
//             <div className="flex items-center">
//               <Calendar className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="age"
//                 name="age"
//                 type="number"
//                 value={patientData.age}
//                 onChange={handleChange}
//                 placeholder="Enter age"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="gender">Gender</Label>
//           <RadioGroup
//             onValueChange={(value) => handleSelectChange(value, "gender")}
//             className="flex space-x-4"
//           >
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem value="male" id="male" />
//               <Label htmlFor="male">Male</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem value="female" id="female" />
//               <Label htmlFor="female">Female</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem value="other" id="other" />
//               <Label htmlFor="other">Other</Label>
//             </div>
//           </RadioGroup>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="diseases">Diseases</Label>
//           <div className="flex items-center">
//             <Stethoscope className="mr-2 h-4 w-4 opacity-70" />
//             <Textarea
//               id="diseases"
//               name="diseases"
//               value={patientData.diseases}
//               onChange={handleChange}
//               placeholder="List patient diseases"
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="allergies">Allergies</Label>
//           <div className="flex items-center">
//             <AlertTriangle className="mr-2 h-4 w-4 opacity-70" />
//             <Textarea
//               id="allergies"
//               name="allergies"
//               value={patientData.allergies}
//               onChange={handleChange}
//               placeholder="List patient allergies"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="roomNumber">Room Number</Label>
//             <div className="flex items-center">
//               <BedDouble className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="roomNumber"
//                 name="roomNumber"
//                 value={patientData.roomNumber}
//                 onChange={handleChange}
//                 placeholder="Enter room number"
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="bedNumber">Bed Number</Label>
//             <div className="flex items-center">
//               <BedDouble className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="bedNumber"
//                 name="bedNumber"
//                 value={patientData.bedNumber}
//                 onChange={handleChange}
//                 placeholder="Enter bed number"
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="floorNumber">Floor Number</Label>
//             <div className="flex items-center">
//               <Building2 className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="floorNumber"
//                 name="floorNumber"
//                 value={patientData.floorNumber}
//                 onChange={handleChange}
//                 placeholder="Enter floor number"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="contactInformation">Contact Information</Label>
//             <div className="flex items-center">
//               <Phone className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="contactInformation"
//                 name="contactInformation"
//                 value={patientData.contactInformation}
//                 onChange={handleChange}
//                 placeholder="Enter contact information"
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="emergencyContact">Emergency Contact</Label>
//             <div className="flex items-center">
//               <UserPlus className="mr-2 h-4 w-4 opacity-70" />
//               <Input
//                 id="emergencyContact"
//                 name="emergencyContact"
//                 value={patientData.emergencyContact}
//                 onChange={handleChange}
//                 placeholder="Enter emergency contact"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <Label>Food/Diet Charts</Label>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="morningMeal">Morning Meal</Label>
//               <div className="flex items-center">
//                 <Utensils className="mr-2 h-4 w-4 opacity-70" />
//                 <Textarea
//                   id="morningMeal"
//                   name="morningMeal"
//                   value={patientData.morningMeal}
//                   onChange={handleChange}
//                   placeholder="Specify morning meal plan"
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="eveningMeal">Evening Meal</Label>
//               <div className="flex items-center">
//                 <Utensils className="mr-2 h-4 w-4 opacity-70" />
//                 <Textarea
//                   id="eveningMeal"
//                   name="eveningMeal"
//                   value={patientData.eveningMeal}
//                   onChange={handleChange}
//                   placeholder="Specify evening meal plan"
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="nightMeal">Night Meal</Label>
//               <div className="flex items-center">
//                 <Utensils className="mr-2 h-4 w-4 opacity-70" />
//                 <Textarea
//                   id="nightMeal"
//                   name="nightMeal"
//                   value={patientData.nightMeal}
//                   onChange={handleChange}
//                   placeholder="Specify night meal plan"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-end space-x-2">
//           <Button
//             onClick={handleSave}
//             variant="default"
//             className="bg-green-600 hover:bg-green-700 text-white"
//           >
//             <Save className="mr-2 h-4 w-4" />
//             Save Patient
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }




"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  BedDouble,
  Calendar,
  Stethoscope,
  AlertTriangle,
  Phone,
  UserPlus,
  Save,
  Building2,
} from "lucide-react";
import { useApiCall } from "@/hooks/apiCall";
import { postCall } from "@/actions/plantry";

interface PatientFormData {
  name: string;
  diseases: string;
  email:string;
  allergies: string;
  roomNumber: number;
  bedNumber: number;
  floorNumber: number;
  age: number;
  gender: string;
  contactInfo:string;
  emergencyContact: string;
  morningMeal: string;
  eveningMeal: string;
  nightMeal: string;
}

export function CreatePatientForm() {
  const [patientData, setPatientData] = useState<PatientFormData>({
    name: "",
    email:"",
    diseases: "",
    allergies: "",
    roomNumber: 0,
    bedNumber: 0,
    floorNumber: 0,
    age: 0,
    gender: "",
    contactInfo: "",
    emergencyContact: "",
    morningMeal: "",
    eveningMeal: "",
    nightMeal: "",
  });

  const {
    loading,
    isSuccess,
    error,
    responseData: data,
    callApi,
  } = useApiCall({
    apiCall: postCall("/patients", patientData),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "age" ||
      name === "roomNumber" ||
      name === "bedNumber" ||
      name === "floorNumber"
        ? Number(value) || 0 // Convert to number (or fallback to 0 if invalid)
        : value;
    setPatientData({ ...patientData, [name]: updatedValue });
  };

  const handleSelectChange = (value: string, name: string) => {
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSave = () => {


    callApi(); 
    if (isSuccess) {
      console.log("Patient data saved successfully:", data);
      setPatientData({
        name: "",
        email:"",
        diseases: "",
        allergies: "",
        roomNumber: 0,
        bedNumber: 0,
        floorNumber: 0,
        age: 0,
        gender: "",
        contactInfo: "",
        emergencyContact: "",
        morningMeal: "",
        eveningMeal: "",
        nightMeal: "",
      });
    }
  };

  return (
    <Card className="mb-6 p-6 mx-auto bg-gray-50 rounded-lg shadow-md w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="font-semibold text-2xl">
          Create New Patient
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Patient Name</Label>
            <div className="flex items-center">
              <UserPlus className="mr-2 h-4 w-4 opacity-70" />
              <Input
                id="name"
                name="name"
                value={patientData.name}
                onChange={handleChange}
                placeholder="Enter patient name"
                disabled={loading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center">
              <AlertTriangle className="mr-2 h-4 w-4 opacity-70" />
              <Textarea
                id="email"
                name="email"
                value={patientData.email}
                onChange={handleChange}
                placeholder="Patient Email"
                disabled={loading}
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
                value={patientData.age || ""}
                onChange={handleChange}
                placeholder="Enter age"
                disabled={loading}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <RadioGroup
            onValueChange={(value) => handleSelectChange(value, "gender")}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Other" id="other" />
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
              placeholder="List patient diseases"
              disabled={loading}
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
              placeholder="List patient allergies"
              disabled={loading}
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
                type="number"
                value={patientData.roomNumber || ""}
                onChange={handleChange}
                placeholder="Enter room number"
                disabled={loading}
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
                type="number"
                value={patientData.bedNumber || ""}
                onChange={handleChange}
                placeholder="Enter bed number"
                disabled={loading}
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
                type="number"
                value={patientData.floorNumber || ""}
                onChange={handleChange}
                placeholder="Enter floor number"
                disabled={loading}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactInformation">Contact Information</Label>
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4 opacity-70" />
            <Input
              id="contactInfo"
              name="contactInfo"
              type="number"
              value={patientData.contactInfo || ""}
              onChange={handleChange}
              placeholder="Enter contact information"
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="emergencyContact">Emergency Contact</Label>
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4 opacity-70" />
            <Input
              id="emergencyContact"
              name="emergencyContact"
              type="number"
              value={patientData.emergencyContact || ""}
              onChange={handleChange}
              placeholder="Enter emergency contact"
              disabled={loading}
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
