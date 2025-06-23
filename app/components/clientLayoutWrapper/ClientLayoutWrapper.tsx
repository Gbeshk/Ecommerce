"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  return (
    <>
      {!isLoginPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
}
