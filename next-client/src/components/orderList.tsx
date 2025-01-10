"use client"
import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Order {
    id:string;
  patientName: string;
  pantryStaffName: string;
  deliveryGuyName: string;
  orderDetails: string;
  deliveredTime: Date | null;
  status: string;
  createdAt: string;
}

const orders: Order[] = [
  {
    id:"1",
    patientName: "John Doe",
    pantryStaffName: "Michael Scott",
    deliveryGuyName: "Dwight Schrute",
    orderDetails: "Vegetarian Meal",
    deliveredTime:null,
    status: "Delivered",
    createdAt: "2025-01-08T17:00:00",
  },
  {
     id:"2",
    patientName: "Alice Smith",
    pantryStaffName: "Pam Beesly",
    deliveryGuyName: "Jim Halpert",
    orderDetails: "Non-Vegetarian Meal",
    deliveredTime: null,
    status: "In Transit",
    createdAt:"2025-01-08T16:30:00",
  },
  // Add more mock orders here...
];

export default function OrderList() {
const router=useRouter()



const handleOrderDetailView=(order:Order)=>{
router.push(`/admin/order/${order.id}`)
}

  return (
    <div className="container mx-auto py-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Pantry Staff</TableHead>
              <TableHead>Delivery Guy</TableHead>
              <TableHead>Order Details</TableHead>
              <TableHead>Delivered Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} onClick={()=>{handleOrderDetailView(order)}}>
                <TableCell>{order.patientName}</TableCell>
                <TableCell>{order.pantryStaffName}</TableCell>
                <TableCell>{order.deliveryGuyName}</TableCell>
                <TableCell>{order.orderDetails}</TableCell>
                <TableCell>
                  {order.deliveredTime
                    ? order.deliveredTime.toLocaleTimeString()
                    : "Not Delivered"}
                </TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
