"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="flex items-center rounded-full w-10 h-10 lg:w-[50px] lg:h-[50px] hover:bg-red-500 hover:text-white cursor-pointer"
    >
      <LogOut size={20} />
    </Button>
  );
};

export default LogoutButton;
