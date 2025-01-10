import  { OrderDisplay } from "@/components/order/orderDetails";

const page = ({ params }: { params: { id: string } }) => {
const dummyOrder = {
  status: "In Transit",
  patient: {
    name: "John Doe",
    roomNumber: "202",
    floorNumber: "3",
  },
  pantryStaff: {
    name: "Alice Smith",
    email: "alice.smith@hospital.com",
  },
  deliveryGuy: {
    name: "Bob Johnson",
    location: "Hospital Main Entrance",
  },
  deliveryTime: "1:45 PM",
};

  return (
    <div>
      <OrderDisplay  />
    </div>
  );
};

export default page