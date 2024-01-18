"use client";

import { usePathname, useRouter } from "next/navigation";

import { useEffect } from "react";

export default function CheckIfAuthenticated() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      console.log("CheckIfAuthenticated: pathname === /");
      router.push("/login");
    }
  }, [pathname]);

  return null;
}
