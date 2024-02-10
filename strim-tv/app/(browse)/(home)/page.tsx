import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>Home Page</h1>
    </div>
  );
}
