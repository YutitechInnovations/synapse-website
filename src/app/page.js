"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EntryRedirect() {
  const router = useRouter();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!hasRedirected) {
      setHasRedirected(true);
      router.replace(isLoggedIn ? "/home" : "/welcome");
    }
  }, [hasRedirected, router]);

  return null;
}
