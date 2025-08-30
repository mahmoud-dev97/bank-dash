import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const weeklyData = [
  { day: "Sat", deposit: 280, withdraw: 120 },
  { day: "Sun", deposit: 150, withdraw: 320 },
  { day: "Mon", deposit: 300, withdraw: 180 },
  { day: "Tue", deposit: 420, withdraw: 250 },
  { day: "Wed", deposit: 280, withdraw: 160 },
  { day: "Thu", deposit: 380, withdraw: 340 },
  { day: "Fri", deposit: 400, withdraw: 380 },
];

function WeeklyActivity() {
  return (
    <div className="xl:col-span-2">
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
        Weekly Activity
      </h2>
      <Card>
        <CardContent>
          <div className="flex justify-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#1814F3] rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-600">Deposit</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#16DBCC] rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-600">Withdraw</span>
            </div>
          </div>
          <ChartContainer
            config={{
              deposit: { label: "Deposit", color: "#1814F3" },
              withdraw: { label: "Withdraw", color: "#16DBCC" },
            }}
            className="h-48 md:h-85 w-full"
          >
            <BarChart data={weeklyData} barCategoryGap="20%">
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="deposit"
                fill="var(--color-deposit)"
                radius={[20, 20, 20, 20]}
              />
              <Bar
                dataKey="withdraw"
                fill="var(--color-withdraw)"
                radius={[20, 20, 20, 20]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
export default WeeklyActivity;
