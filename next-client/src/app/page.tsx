"use client"
import SignInForm from "@/components/Signup";
import useRoleRedirect from "@/hooks/route";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-gradient-to-b from-blue-100 to-white">

      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-600 text-center">
        NutriCare Connect
      </h1>
      <h2 className="text-lg sm:text-xl mb-8 text-gray-600 text-center">
        Seamless Hospital Food Delivery Solutions
      </h2>
      <SignInForm />
    </main>
  );
}
