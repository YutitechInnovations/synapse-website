"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EntryRedirect() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (accessToken && isLoggedIn) {
      router.replace("/home");
    } else {
      router.replace("/welcome");
    }
  }, [router]);

  return null;
}
