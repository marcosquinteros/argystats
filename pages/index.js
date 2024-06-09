import { Inter } from "next/font/google";
import DolarOficial from "@/components/DolarOficial";
import DolarBlue from "@/components/DolarBlue";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className="text-3xl font-bold text-center mb-4">ArgyStats</h1>
        <div className="flex gap-4">
      <DolarOficial />
      <DolarBlue />

        </div>
    </div>
    
    </main>
  );
}
