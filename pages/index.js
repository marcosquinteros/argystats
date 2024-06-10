import { Inter } from "next/font/google";
import DolarOficial from "@/components/DolarOficial";
import DolarBlue from "@/components/DolarBlue";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Dolares from "@/components/Dolars";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold text-center mb-4">ArgyStats</h1>
        <div className="flex gap-4">
          <Suspense fallback={<Skeleton />}>
            <DolarOficial />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <DolarBlue />
          </Suspense>
        </div>
      </div>
          <Dolares/>
    </main>
  );
}
