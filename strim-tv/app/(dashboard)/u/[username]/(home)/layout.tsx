import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/auth-services";
import Navbar from "./_components/navbar";
// import { Sidebar } from "@/app/(browse)/_components/sidebar";
import { Container } from "./_components/container";
import { Sidebar } from "./_components/sidebar";



interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
};

const CreatorLayout = async ({
  params,
  children,
}: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return ( 
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        {/* <Sidebar /> */}
        <Sidebar />
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
}
 
export default CreatorLayout;