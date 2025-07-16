"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Pie, PieChart, Cell, ResponsiveContainer, Label, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { name: "New Allē Members", value: 19, fill: "#9a6b5e" },
  { name: "Existing Members", value: 24, fill: "#e8d4d1" },
];

const chartConfig = {
  value: {
    label: "Members",
  },
  "New Allē Members": {
    label: "New Allē Members",
    color: "#9a6b5e",
  },
  "Existing Members": {
    label: "Existing Members",
    color: "#e8d4d1",
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
            className="mx-auto aspect-square h-[220px] w-full"
          >
            <PieChart width={220} height={220}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                strokeWidth={0}
                activeIndex={0}
                activeShape={({
                  outerRadius = 0,
                  ...props
                }: PieSectorDataItem) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                )}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {totalMembers}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-xs"
                          >
                            Total
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#9a6b5e" }}></div>
                <p className="text-sm font-medium text-[#787676]">New Allē Members</p>
              </div>
              <p className="text-xl font-semibold text-[#090909]">19</p>
              <p className="text-sm text-[#787676] mt-1">via Payment Plan</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e8d4d1" }}></div>
                <p className="text-sm font-medium text-[#787676]">Existing Members</p>
              </div>
              <p className="text-xl font-semibold text-[#090909]">24</p>
              <p className="text-sm text-[#787676] mt-1">Financed at Sold-To</p>
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