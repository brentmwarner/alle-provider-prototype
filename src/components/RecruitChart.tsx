"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis, Cell } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

const chartData = [
  { 
    period: "Prior R12",
    agn: 422,
    newMembers: 209,
    total: 631
  },
  { 
    period: "Current R12",
    agn: 429,
    newMembers: 214,
    total: 643
  },
]

const chartConfig = {
  agn: {
    label: "AGN",
    color: "#B98977",
  },
  newMembers: {
    label: "New Members", 
    color: "#f5e6e1",
  },
} satisfies ChartConfig

export function RecruitChart() {
  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-[#090909]">Recruit</CardTitle>
        <CardDescription className="text-sm text-[#787676] font-normal">
          New Members vs New Members from AGN
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 40,
              right: 20,
              bottom: 30,
              left: -20,
            }}
            barCategoryGap="20%"
            barGap={8}
          >
            <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="period"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: '#787676', fontSize: 14 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#787676', fontSize: 14 }}
              ticks={[0, 200, 400, 600, 800]}
              domain={[0, 800]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            
            {/* New Members bars */}
            <Bar dataKey="newMembers" fill="var(--color-newMembers)" radius={[4, 4, 0, 0]}>
              <LabelList
                position="top"
                content={(props: any) => {
                  const { x, y, width, value, index } = props;
                  const percentage = "33%";
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 8}
                      fill="#090909"
                      textAnchor="middle"
                      fontSize={12}
                      fontWeight={500}
                    >
                      {`${value} (${percentage})`}
                    </text>
                  );
                }}
              />
            </Bar>
            
            {/* AGN bars */}
            <Bar dataKey="agn" fill="var(--color-agn)" radius={[4, 4, 0, 0]}>
              <LabelList
                position="top"
                content={(props: any) => {
                  const { x, y, width, value, index } = props;
                  const percentage = "67%";
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 8}
                      fill="#090909"
                      textAnchor="middle"
                      fontSize={12}
                      fontWeight={500}
                    >
                      {`${value} (${percentage})`}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-4 px-6 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f5e6e1]" />
            <span className="text-sm text-[#090909]">New Members</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#b8998d]" />
            <span className="text-sm text-[#090909]">New Members from AGN</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}