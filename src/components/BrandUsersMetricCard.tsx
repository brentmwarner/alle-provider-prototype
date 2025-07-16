"use client"

import * as React from "react"
import { Label, Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

const chartData = [
  { brand: "single", users: 1817, fill: "#9a6b5e" },
  { brand: "two", users: 975, fill: "#B98977" },
  { brand: "three-plus", users: 388, fill: "#e8d4d1" },
]

const chartConfig = {
  users: {
    label: "Users",
  },
  single: {
    label: "Single Brand",
    color: "hsl(17, 24%, 44%)",
  },
  two: {
    label: "Two Brand",
    color: "hsl(17, 35%, 60%)",
  },
  "three-plus": {
    label: "3+ Brand",
    color: "hsl(8, 35%, 87%)",
  },
} satisfies ChartConfig

export const BrandUsersMetricCard = (): JSX.Element => {
  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0)
  }, [])

  return (
    <Card className="border-[#dedad7]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-[#090909]">
          Single Brand Users vs Multi-Brand Users
        </CardTitle>
        <p className="text-sm text-[#787676] font-normal">(24 months rolling)</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[250px] w-full"
        >
          <PieChart width={250} height={250}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <g>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan
                  x="50%"
                  y="50%"
                  dy="-0.3em"
                  className="text-3xl font-bold"
                  fill="#090909"
                >
                  {totalUsers.toLocaleString()}
                </tspan>
                <tspan
                  x="50%"
                  y="50%"
                  dy="1.2em"
                  className="text-sm text-center text-wrap"
                  fill="#787676"
                >
                  Active Members
                </tspan>
              </text>
            </g>
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="brand"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              strokeWidth={0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Legend */}
        <div className="flex flex-row w-full justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#9a6b5e" }}></div>
            <span className="text-sm text-[#787676]">Single brand</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#B98977" }}></div>
            <span className="text-sm text-[#787676]">Two brand</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#e8d4d1" }}></div>
            <span className="text-sm text-[#787676]">3+ brand</span>
          </div>
        </div>

        {/* Value Banner */}
        <div className="mt-2 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col">
            <p className="text-base font-medium text-[#090909]">Multi-Brand Value</p>
            <p className="text-2xl font-semibold text-[#090909] mt-2 mb-2">43% of Members</p>
            <p className="text-sm text-[#787676]">Members using multiple Allergan brands show higher engagement and lifetime value</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};