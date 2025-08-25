import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

const quickTransferUsers = [
  { name: "Livia Bator", role: "CEO", avatar: "/avatar.png" },
  { name: "Randy Press", role: "Director", avatar: "/avatar.png" },
  { name: "Workman", role: "Designer", avatar: "/avatar.png" },
];

function QuickTransfer() {
  return (
    <div className="flex flex-col">
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
        Quick Transfer
      </h2>
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-center space-x-3 md:space-x-8 mb-6">
            {quickTransferUsers.map((user, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={70}
                  height={70}
                />
                <p className="text-xs md:text-sm font-medium text-gray-900 truncate max-w-16">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate max-w-16">
                  {user.role}
                </p>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-10 h-10 lg:w-13 lg:h-13 rounded-full flex-shrink-0"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex-1">
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                Write Amount
              </p>
              <Input
                placeholder="525.50"
                className="text-right text-sm md:text-base"
              />
            </div>
            <Button className="bg-[#0C21C1] hover:bg-blue-700 px-4 md:px-6 text-sm md:text-base sm:self-end">
              Send <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default memo(QuickTransfer);
