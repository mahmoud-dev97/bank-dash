import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
        <div className="max-w-md mx-auto w-full">
          <Image
            src="/logo.png"
            alt="Bank Dashboard Logo"
            width={183}
            height={36}
            className="absolute lg:top-20 lg:left-20 top-10"
            priority
            aria-label="Bank Dashboard"
          />
          {children}
        </div>
      </div>

      {/* Right side */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <Image
          src="/login.png"
          alt="Person working at desk with computer"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 50vw, 100vw"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
