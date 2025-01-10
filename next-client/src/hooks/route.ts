"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/store/atoms/userAtom";

const useRoleRedirect = () => {
  const router = useRouter();

  const user = useRecoilValue(userAtom);
  useEffect(() => {
    const roleRoutes: { [key: string]: string } = {
      Admin: "/admin",
      PlanetaryStaff: "/planetary",
      DeliveryGuy: "/delivery",
    };

    if (user.role) {
      if (roleRoutes[user.role]) {
        router.push(roleRoutes[user.role]); 
      } 
    }
  }, [user]);
};

export default useRoleRedirect;
