import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const recentTransactions = [
  {
    type: "deposit",
    description: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    icon: "/my_card.png",
  },
  {
    type: "deposit",
    description: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    icon: "/paypal.png",
  },
  {
    type: "transfer",
    description: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    icon: "/money.png",
  },
];

function RecentTransactions() {
  return (
    <div className="flex flex-col">
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
        Recent Transaction
      </h2>
      <Card className="flex-1">
        <CardContent className="p-4 h-full">
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={transaction.icon}
                    alt="Transaction Icon"
                    width={55}
                    height={55}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 text-sm md:text-base truncate">
                      {transaction.description}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`font-semibold text-sm md:text-base flex-shrink-0 ml-2 ${
                    transaction.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecentTransactions;
