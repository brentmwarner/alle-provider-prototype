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
    period: "Prior",
    retained: 860,
    nonRetained: 1112
  },
  { 
    period: "Current",
    retained: 782,
    nonRetained: 1066
  },
]

const chartConfig = {
  retained: {
    label: "Retained",
    color: "#b8998d",
  },
  nonRetained: {
    label: "Non-Retained", 
    color: "#e8d4d1",
  },
} satisfies ChartConfig

export function RetentionChart() {
  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-[#090909]">Retention</CardTitle>
        <CardDescription className="text-sm text-[#787676] font-normal">
          You're retaining less patients this year than the previous 12 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 50,
              right: 20,
              bottom: 40,
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
              ticks={[0, 1000, 10000]}
              tickFormatter={(value) => value === 10000 ? '10K' : value === 1000 ? '1k' : '0'}
              domain={[0, 2000]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            
            {/* Non-Retained bars */}
            <Bar dataKey="nonRetained" fill="var(--color-nonRetained)" radius={[4, 4, 0, 0]}>
              <LabelList
                position="top"
                content={(props: any) => {
                  const { x, y, width, value, index } = props;
                  const percentage = index === 0 ? "56%" : "58%";
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 8}
                      fill="#090909"
                      textAnchor="middle"
                      fontSize={14}
                      fontWeight={500}
                    >
                      {`${value.toLocaleString()} (${percentage})`}
                    </text>
                  );
                }}
              />
            </Bar>
            
            {/* Retained bars */}
            <Bar dataKey="retained" fill="var(--color-retained)" radius={[4, 4, 0, 0]}>
              <LabelList
                position="top"
                content={(props: any) => {
                  const { x, y, width, value, index } = props;
                  const percentage = index === 0 ? "44%" : "42%";
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 8}
                      fill="#090909"
                      textAnchor="middle"
                      fontSize={14}
                      fontWeight={500}
                    >
                      {`${value.toLocaleString()} (${percentage})`}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
        
        {/* Value Highlight Banner */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col">
            <p className="text-base font-medium text-[#090909]">Retention Value</p>
            <p className="text-2xl font-semibold text-[#090909] mt-2 mb-2">$487,320</p>
            <p className="text-sm text-[#787676]">Estimated revenue from retained Allē members, from 782 retained members</p>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-6 px-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#e8d4d1]" />
            <span className="text-sm text-[#090909]">Retained</span>
            <span className="text-sm font-medium text-[#090909] ml-4">2,567</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#b8998d]" />
            <span className="text-sm text-[#090909]">Non-Retained</span>
            <span className="text-sm font-medium text-[#090909] ml-4">3,421</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}