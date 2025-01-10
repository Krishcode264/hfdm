import { atom } from "recoil";
type UserRole = "Admin" | "PlanetaryStaff" | "DeliveryGuy" | "";
interface UserState {
  role: UserRole;
  name: string;
  email: string;
}


export const userAtom = atom<UserState>({
  key: "userAtom", 
  default: {
    email:"",
    name:"",
    role: "", 
  },
});
