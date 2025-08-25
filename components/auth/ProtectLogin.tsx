"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  return <>{children}</>;
}
