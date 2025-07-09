"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

export const description = "Lifetime value comparison between Allē members and non-members"

const chartData = [
  // 2020
  { date: "2020-01-01", alleyMembers: 0, nonMembers: 0 },
  { date: "2020-07-01", alleyMembers: 2850, nonMembers: 890 },
  
  // 2021
  { date: "2021-01-01", alleyMembers: 3750, nonMembers: 1175 },
  { date: "2021-07-01", alleyMembers: 6925, nonMembers: 2250 },
  
  // 2022
  { date: "2022-01-01", alleyMembers: 7200, nonMembers: 2425 },
  { date: "2022-07-01", alleyMembers: 10275, nonMembers: 3600 },
  
  // 2023
  { date: "2023-01-01", alleyMembers: 11150, nonMembers: 3875 },
  { date: "2023-07-01", alleyMembers: 14225, nonMembers: 4950 },
  
  // 2024
  { date: "2024-01-01", alleyMembers: 14900, nonMembers: 5225 },
  { date: "2024-07-01", alleyMembers: 17975, nonMembers: 6300 },
  
  // 2025
  { date: "2025-01-01", alleyMembers: 18996, nonMembers: 6686 },
]

const chartConfig = {
  alleyMembers: {
    label: "Allē Members",
    color: "#9a6b5e",
  },
  nonMembers: {
    label: "Non-Allē Members",
    color: "#e8d4d1",
  },
} satisfies ChartConfig

export function LifetimeValueChart() {
  const totalRevenue = "$18,996"
  const multiplier = "3.2"

  return (
    <Card className="border-[#dedad7]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-medium text-[#090909]">
              Lifetime Value
            </CardTitle>
            <CardDescription className="text-sm text-[#787676] font-normal">
              The average value of Allē members are {multiplier}x higher than non-members over 5 years
            </CardDescription>
          </div>
          <p className="text-3xl font-semibold text-[#090909]">{totalRevenue}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[320px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid 
              vertical={false} 
              stroke="#e0e0e0"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: '#787676', fontSize: 13 }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.getFullYear().toString()
              }}
              ticks={[
                '2020-01-01',
                '2021-01-01',
                '2022-01-01',
                '2023-01-01',
                '2024-01-01',
                '2025-01-01'
              ]}
              domain={['2020-01-01', '2025-01-01']}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: '#787676', fontSize: 13 }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[200px]"
                  labelFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  formatter={(value) => [`$${value}`, undefined]}
                  indicator="dot"
                />
              }
            />
            <Line
              dataKey="alleyMembers"
              type="monotone"
              stroke="#9a6b5e"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#9a6b5e" }}
            />
            <Line
              dataKey="nonMembers"
              type="monotone"
              stroke="#e8d4d1"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#e8d4d1" }}
            />
          </LineChart>
        </ChartContainer>
        
        <div className="mt-6 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#9a6b5e" }} />
            <span className="text-sm text-[#787676]">Allē LTV</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#e8d4d1" }} />
            <span className="text-sm text-[#787676]">Non-Allē LTV</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}