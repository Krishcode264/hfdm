// "use client";

// import React from "react";

// import { Phone, MapPin, ClipboardList, User, Truck, Clock } from "lucide-react";
// import  { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
// import { Badge } from "../ui/badge";
// interface OrderDetailsType {
//   status: string; // Status of the order e.g., "Preparing", "In Transit", "Delivered"
//   patient: {
//     name: string; // Patient's full name
//     roomNumber: string; // Patient's room number
//     floorNumber: string; // Patient's floor number
//   };
//   pantryStaff: {
//     name: string; // Pantry staff's full name
//     email: string; // Pantry staff's email address
//   };
//   deliveryGuy: {
//     name: string; // Delivery personnel's full name
//     location: string; // Current location of the delivery personnel
//   };
//   deliveryTime: string; // Expected or actual delivery time, in a readable format
// }

// const OrderDetails = ({ order }: { order: OrderDetailsType }) => {
//   return (
//     <Card className="mb-6 mx-auto bg-gray-50 rounded-lg shadow-md w-full md:w-[50%]">
//       <CardHeader>
//         <CardTitle>Meal Order Details</CardTitle>
//         <CardDescription>
//           Detailed information about the meal order for the hospital patient
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         {/* Order Status */}
//         <div className="flex items-center gap-2">
//           <ClipboardList className="h-4 w-4 opacity-70" />
//           <Badge variant="secondary">Status: {order.status}</Badge>
//         </div>

//         {/* Patient Details */}
//         <div>
//           <h3 className="font-semibold text-lg">Patient Information</h3>
//           <div className="flex items-center gap-2">
//             <User className="h-4 w-4 opacity-70" />
//             <span>{order.patient.name}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin className="h-4 w-4 opacity-70" />
//             <span>
//               Room: {order.patient.roomNumber}, Floor:{" "}
//               {order.patient.floorNumber}
//             </span>
//           </div>
//         </div>

//         {/* Pantry Staff Details */}
//         <div>
//           <h3 className="font-semibold text-lg">Pantry Staff Information</h3>
//           <div className="flex items-center gap-2">
//             <User className="h-4 w-4 opacity-70" />
//             <span>{order.pantryStaff.name}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="h-4 w-4 opacity-70" />
//             <span>{order.pantryStaff.email}</span>
//           </div>
//         </div>

//         {/* Delivery Guy Details */}
//         <div>
//           <h3 className="font-semibold text-lg">
//             Delivery Personnel Information
//           </h3>
//           <div className="flex items-center gap-2">
//             <User className="h-4 w-4 opacity-70" />
//             <span>{order.deliveryGuy.name}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Truck className="h-4 w-4 opacity-70" />
//             <span>Location: {order.deliveryGuy.location}</span>
//           </div>
//         </div>

//         {/* Delivery Time */}
//         <div>
//           <h3 className="font-semibold text-lg">Delivery Time</h3>
//           <div className="flex items-center gap-2">
//             <Clock className="h-4 w-4 opacity-70" />
//             <span>{order.deliveryTime}</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default OrderDetails;


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Utensils,
  Calendar,
  Clock,
  MapPin,
  Truck,
  ChefHat,
  AlertCircle,
  CheckCircle,
  Package,
  Mail,
  Phone,
} from "lucide-react";

// This would typically come from an API or props
const mockOrder = {
  patientId: {
    name: "John Doe",
    roomNumber: "301",
    bedNumber: "2",
    floorNumber: "3",
  },
  deliveryGuyId: {
    name: "Mike Delivery",
    contactNumber: "555-0123",
  },
  pantryStaffAssigned: {
    name: "Chef Gordon",
    email: "gordon@hospital.com",
  },
  orderDetails: "Vegetarian lunch with no nuts",
  deliveredTime: new Date("2023-06-15T12:30:00"),
  status: "In Transit",
  createdAt: new Date("2023-06-15T11:00:00"),
};

export function OrderDisplay() {
  const [order, setOrder] = useState(mockOrder);

  // In a real application, you'd fetch the order data here
  useEffect(() => {
    // Fetch order data and update state
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Preparing":
        return <ChefHat className="h-5 w-5" />;
      case "Pending":
        return <Clock className="h-5 w-5" />;
      case "In Transit":
        return <Truck className="h-5 w-5" />;
      case "Delivered":
      case "Done":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Preparing":
        return "bg-yellow-100 text-yellow-800";
      case "Pending":
        return "bg-blue-100 text-blue-800";
      case "In Transit":
        return "bg-purple-100 text-purple-800";
      case "Delivered":
      case "Done":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold">
                Order Details
              </CardTitle>
              <CardDescription>
                Order #{Math.floor(Math.random() * 10000)}
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className={`text-sm py-1 px-2 ${getStatusColor(order.status)}`}
            >
              {getStatusIcon(order.status)}
              <span className="ml-2 font-semibold">{order.status}</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoSection
              title="Patient Information"
              icon={<User className="h-5 w-5" />}
            >
              <InfoItem icon={<User />} text={order.patientId.name} />
              <InfoItem
                icon={<MapPin />}
                text={`Room ${order.patientId.roomNumber}, Bed ${order.patientId.bedNumber}, Floor ${order.patientId.floorNumber}`}
              />
            </InfoSection>
            <InfoSection
              title="Order Information"
              icon={<Package className="h-5 w-5" />}
            >
              <InfoItem icon={<Utensils />} text={order.orderDetails} />
              <InfoItem
                icon={<Calendar />}
                text={`Created: ${order.createdAt.toLocaleString()}`}
              />
              {order.deliveredTime && (
                <InfoItem
                  icon={<Clock />}
                  text={`Delivered: ${order.deliveredTime.toLocaleString()}`}
                />
              )}
            </InfoSection>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoSection
              title="Pantry Staff"
              icon={<ChefHat className="h-5 w-5" />}
            >
              <InfoItem icon={<User />} text={order.pantryStaffAssigned.name} />
              <InfoItem
                icon={<Mail />}
                text={order.pantryStaffAssigned.email}
              />
            </InfoSection>
            <InfoSection
              title="Delivery Staff"
              icon={<Truck className="h-5 w-5" />}
            >
              <InfoItem icon={<User />} text={order.deliveryGuyId.name} />
              <InfoItem
                icon={<Phone />}
                text={order.deliveryGuyId.contactNumber}
              />
            </InfoSection>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function InfoSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold flex items-center space-x-2">
        {icon}
        <span>{title}</span>
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-muted-foreground">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

