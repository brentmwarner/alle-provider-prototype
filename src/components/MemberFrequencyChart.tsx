"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell, Text } from "recharts"
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
import { Button } from "./ui/button"

const chartData = [
  { 
    period: "Last Year",
    "1x": 917,
    "2x": 535,
    "3x+": 396,
    total: 1848,
    avgFrequency: 1.83
  },
  { 
    period: "This Year",
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
    color: "#B98977",
  },
  threePlus: {
    label: "3x+ Members",
    color: "#090909",
  },
} satisfies ChartConfig

const CustomLabel = (props: any) => {
  const { x, y, width, height, value, dataKey, index } = props;
  const dataPoint = chartData[index];
  if (!dataPoint || !value) return null;
  
  const percentage = Math.round((value / dataPoint.total) * 100);
  const yPos = y + height / 2;
  
  const fill = dataKey === "1x" ? "#090909" : "white";
  
  return (
    <text
      x={x + width / 2}
      y={yPos}
      fill={fill}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={12}
      fontWeight={500}
    >
      {`${value} (${percentage}%)`}
    </text>
  );
};

export function MemberFrequencyChart() {
  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-[#090909]">Frequency</CardTitle>
        <CardDescription className="text-sm text-[#787676] font-normal">
          Track how often members visit - comparing last 12 months vs. prior period
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart
            data={chartData}
            margin={{
              top: 40,
              right: 20,
              bottom: 30,
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
              cursor={false}
              content={
                <ChartTooltipContent 
                  formatter={(value: any, name: any, props: any) => {
                    const total = props.payload.total;
                    const percentage = Math.round((value / total) * 100);
                    return (
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-sm" 
                          style={{ 
                            backgroundColor: name === "3x+" ? "#090909" : 
                                           name === "2x" ? "#B98977" : 
                                           "#e8d4d1" 
                          }} 
                        />
                        <span>{value.toLocaleString()} members ({percentage}%)</span>
                      </div>
                    );
                  }}
                  labelFormatter={(label) => label}
                />
              }
            />
            
            <Bar dataKey="3x+" stackId="a" fill="#090909" radius={[0, 0, 0, 0]} isAnimationActive={false} label={<CustomLabel dataKey="3x+" />} />
            <Bar dataKey="2x" stackId="a" fill="#B98977" radius={[0, 0, 0, 0]} isAnimationActive={false} label={<CustomLabel dataKey="2x" />} />
            <Bar dataKey="1x" stackId="a" fill="#e8d4d1" radius={[4, 4, 0, 0]} isAnimationActive={false} label={<CustomLabel dataKey="1x" />} />
          </BarChart>
        </ChartContainer>
        
        {/* Banner Section */}
        <div className="mt-4 bg-gray-50 rounded-lg p-3">
          <h3 className="text-sm font-medium text-[#090909] mb-2">
            Your returning patients are lower this year averaging at 1.8 compared to 1.83 last year
          </h3>
          <p className="text-sm text-[#787676] mb-3">
            Turn on automated reminder campaigns in Email Marketing to increase patient frequency
          </p>
          <div className="flex justify-end">
            <Button className="bg-[#090909] text-white hover:bg-[#1a1a1a] px-6 py-2">
              Go to Email Marketing
            </Button>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 px-6 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#e8d4d1]" />
            <span className="text-sm text-[#090909]">1x Visit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#B98977]" />
            <span className="text-sm text-[#090909]">2x Visits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#090909]" />
            <span className="text-sm text-[#090909]">3x+ Visits</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}