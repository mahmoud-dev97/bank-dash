import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { memo } from "react";
import { PieChart, Pie, Cell } from "recharts";

const expenseData = [
  { name: "Entertainment", value: 30, color: "#8B5CF6" },
  { name: "Bill Expenses", value: 15, color: "#F97316" },
  { name: "Investment", value: 20, color: "#EC4899" },
  { name: "Others", value: 35, color: "#3B82F6" },
];

function ExpenseStatistics() {
  return (
    <div>
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
        Expense Statistics
      </h2>
      <Card>
        <CardContent>
          <ChartContainer
            config={{
              Entertainment: { label: "Entertainment", color: "#8B5CF6" },
              "Bill Expenses": { label: "Bill Expenses", color: "#F97316" },
              Investment: { label: "Investment", color: "#EC4899" },
              Others: { label: "Others", color: "#3B82F6" },
            }}
            className="h-48 md:h-60 w-full"
          >
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>

          <div className="space-y-2 mt-4">
            {expenseData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs md:text-sm text-gray-600 truncate">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-medium flex-shrink-0">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default memo(ExpenseStatistics);
