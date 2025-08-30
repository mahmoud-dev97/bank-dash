import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Entertainment", value: 30, color: "#4A5568" },
  { name: "Bill Expense", value: 15, color: "#FF8C00" },
  { name: "Investment", value: 20, color: "#FF1493" },
  { name: "Others", value: 35, color: "#0066FF" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="font-semibold text-sm"
    >
      <tspan x={x} dy="-0.3em">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="1.2em">
        {name}
      </tspan>
    </text>
  );
};

function ExpenseStatistics() {
  return (
    <div>
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
        Expense Statistics
      </h2>
      <Card className="w-full">
        <CardContent>
          <div className="h-90 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={180}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={1}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default ExpenseStatistics;
