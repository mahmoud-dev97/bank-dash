"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.replace("/");
    }
    setChecking(false);
  }, [router]);

  if (checking) {
    return <Loading />;
  }

  return <>{children}</>;
}
