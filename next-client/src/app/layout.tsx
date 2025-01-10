
import "./globals.css";
import RecoilRoot from "@/lib/recoilRoot";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-[100vw] h-[100vh] overflow-y-auto ">
          <div className="w-full p-2 sticky z-30 top-0 text-white text-center bg-gradient-to-r from-blue-500 to-violet-500">
            As a developer, this isn't my best work due to time constraints—some
            components use hardcoded data, and while the app is responsive,
            further UI and mobile optimizations could have been made
          </div>
          <div className="h-[90%] overflow-y-auto">
            <RecoilRoot>{children}</RecoilRoot>
          </div>
        </div>
      </body>
    </html>
  );
}
