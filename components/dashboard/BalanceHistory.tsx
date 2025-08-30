import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

const balanceHistory = [
  { month: "Jul", balance: 300 },
  { month: "Aug", balance: 450 },
  { month: "Sep", balance: 200 },
  { month: "Oct", balance: 500 },
  { month: "Nov", balance: 300 },
  { month: "Dec", balance: 550 },
  { month: "Jan", balance: 400 },
];

function BalanceHistory() {
  return (
    <div className="xl:col-span-2 flex flex-col">
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
        Balance History
      </h2>
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1">
          <ChartContainer
            config={{
              balance: { label: "Balance", color: "#1814F3" },
            }}
            className="h-48 md:h-60 w-full"
          >
            <AreaChart data={balanceHistory}>
              <defs>
                <linearGradient
                  id="balanceGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--color-balance)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-balance)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="var(--color-balance)"
                strokeWidth={3}
                fill="url(#balanceGradient)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default BalanceHistory;
