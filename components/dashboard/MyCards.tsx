import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function MyCards() {
  return (
    <div className="xl:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">
          My Cards
        </h2>
        <Button variant="ghost" size="sm" className="text-gray-600 text-sm">
          See All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
        {/* Blue Card */}
        <Card className="bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white border-0 h-full">
          <CardContent className="p-4 md:p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <div>
                <p className="text-white text-sm">Balance</p>
                <p className="text-xl md:text-2xl font-bold">$5,756</p>
              </div>
              <Image
                src="/Chip_Card.png"
                alt="Chip Card"
                width={35}
                height={35}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-white">CARD HOLDER</span>
                <span className="text-white">VALID THRU</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium">Eddy Cusuma</span>
                <span className="font-medium">12/22</span>
              </div>
              <div className="pt-2 md:pt-4">
                <p className="text-lg md:text-xl font-mono tracking-wider">
                  3778 **** **** 1234
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* White Card */}
        <Card className="bg-white border border-gray-200 h-full">
          <CardContent className="p-4 md:p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <div>
                <p className="text-gray-500 text-sm">Balance</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  $5,756
                </p>
              </div>
              <Image
                src="/Chip_Card_Gray.png"
                alt="Chip Card"
                width={35}
                height={35}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-500">CARD HOLDER</span>
                <span className="text-gray-500">VALID THRU</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-gray-900">Eddy Cusuma</span>
                <span className="font-medium text-gray-900">12/22</span>
              </div>
              <div className="pt-2 md:pt-4">
                <p className="text-lg md:text-xl font-mono tracking-wider text-gray-900">
                  3778 **** **** 1234
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MyCards;
