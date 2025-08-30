"use client";
import Image from "next/image";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-[100vw]">
      <div className="flex justify-center flex-wrap">
        <Image
          src="/logo.png"
          alt="logo"
          priority
          width={183}
          height={36}
          style={{ marginBottom: "20px" }}
        />
        <BarLoader width={"100%"} color="#0C21C1" height={6} />
      </div>
    </div>
  );
};

export default Loading;
