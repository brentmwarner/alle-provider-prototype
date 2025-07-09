"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
    "1x": 917,
    "2x": 535,
    "3x+": 396,
    total: 1848,
    avgFrequency: 1.83
  },
  { 
    period: "Current R12",
    "1x": 1004,
    "2x": 479,
    "3x+": 395,
    total: 1878,
    avgFrequency: 1.80
  },
]

const chartConfig = {
  oneTime: {
    label: "1x Members",
    color: "#e8d4d1",
  },
  twoTime: {
    label: "2x Members", 
    color: "#b8998d",
  },
  threePlus: {
    label: "3x+ Members",
    color: "#60433B",
  },
} satisfies ChartConfig

export function MemberFrequencyChart() {
  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-[#090909]">Frequency</CardTitle>
        <CardDescription className="text-sm text-[#787676] font-normal">
          Track how often members visit - comparing last 12 months vs. prior period
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <BarChart
            data={chartData}
            margin={{
              top: 50,
              right: 20,
              bottom: 40,
              left: 0,
            }}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#787676', fontSize: 13 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#787676', fontSize: 13 }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              content={
                <ChartTooltipContent 
                  formatter={(value: any, name: string, props: any) => {
                    const total = props.payload.total;
                    const percentage = Math.round((value / total) * 100);
                    return `${value.toLocaleString()} (${percentage}%)`;
                  }}
                />
              }
            />
            
            <Bar dataKey="3x+" stackId="a" fill="#60433B" radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar dataKey="2x" stackId="a" fill="#b8998d" radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar dataKey="1x" stackId="a" fill="#e8d4d1" radius={[4, 4, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ChartContainer>
        
        {/* Data Summary Section */}
        <div className="mt-6 grid grid-cols-2 gap-4 px-6">
          {chartData.map((period, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-[#090909] mb-3">{period.period}</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#787676]">Total Members:</span>
                  <span className="text-sm font-medium text-[#090909]">{period.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#787676]">Avg Frequency:</span>
                  <span className="text-sm font-medium text-[#090909]">{period.avgFrequency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 px-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#e8d4d1]" />
            <span className="text-sm text-[#090909]">1x Visit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#b8998d]" />
            <span className="text-sm text-[#090909]">2x Visits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#60433B]" />
            <span className="text-sm text-[#090909]">3x+ Visits</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}