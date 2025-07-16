"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { name: "total", value: 43, fill: "#e8d4d1", label: "Total Members Financed" },
  { name: "new", value: 19, fill: "#9a6b5e", label: "New Members From Payment Plans" },
];

const chartConfig = {
  value: {
    label: "Members",
  },
  total: {
    label: "Total Members Financed",
    color: "#e8d4d1",
  },
  new: {
    label: "New Members From Payment Plans",
    color: "#9a6b5e",
  },
} satisfies ChartConfig;

export const PaymentPlansMetricCard = (): JSX.Element => {
  const totalMembers = 43; // Total members financed

  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium text-[#090909]">
          Payment Plans
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-4">
          {/* Pie Chart */}
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-[220px] w-full"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie 
                data={chartData} 
                dataKey="value" 
                label 
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
              />
            </PieChart>
          </ChartContainer>

          {/* Legend */}
          <div className="flex flex-row w-full justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#e8d4d1" }}></div>
              <span className="text-sm text-[#787676]">Total Members Financed <span className="font-medium">43</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#9a6b5e" }}></div>
              <span className="text-sm text-[#787676]">New Members From Payment Plans <span className="font-medium">19</span></span>
            </div>
          </div>

          {/* Total Financed Amount */}
          <div className="mt-3 p-3 bg-gray-50 rounded-lg text-center">
            <p className="text-sm font-medium text-[#787676] mb-1">Total Dollars Financed at Sold-To</p>
            <p className="text-2xl font-semibold text-[#090909]">$58,479</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};