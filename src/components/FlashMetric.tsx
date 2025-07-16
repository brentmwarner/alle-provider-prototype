"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const scanRateData = [{ name: "scan", active: 131, inactive: 59 }];
const redemptionRateData = [{ name: "redemption", active: 48, inactive: 30 }];

const scanChartConfig = {
  active: {
    label: "Active",
    color: "#b98977",
  },
  inactive: {
    label: "Inactive",
    color: "#f9f3f1",
  },
} satisfies ChartConfig;

const redemptionChartConfig = {
  active: {
    label: "Active",
    color: "#b98977",
  },
  inactive: {
    label: "Inactive",
    color: "#f9f3f1",
  },
} satisfies ChartConfig;

export const FlashMetric = (): JSX.Element => {
  return (
    <Card className="border-[#dedad7] p-6">
      <div>
        {/* Header */}
        <div className="space-y-0 mb-6">
          <h3 className="text-xl font-medium text-[#090909]">Flash</h3>
          <p className="text-sm text-[#787676] mt-0">
            You're retaining less patients this year than the previous 12 months
          </p>
        </div>

        {/* Charts Section */}
        <div className="flex flex-row gap-4 mb-6">
          {/* Scan Rate Chart */}
          <div className="bg-white w-full rounded-lg px-4 pt-4 pb-2">
            <h4 className="text-base font-medium text-[#090909] mb-2">Scan Rate</h4>
            <div className="relative h-[200px] flex items-end">
            <ChartContainer
          config={scanChartConfig}
          className="mx-auto w-full"
          style={{ height: "160px" }}
        >
          <RadialBarChart
            data={scanRateData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
            {/* If you want to display a label in the center, render it outside the PolarRadiusAxis */}
            <g>
              <text
                x="20%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan
                  x="50%"
                  dy="-0.5em"
                  className="fill-foreground text-2xl font-bold"
                >
                  51%
                </tspan>
                <tspan
                  x="50%"
                  dy="1.5em"
                  className="fill-muted-foreground"
                >
                  Scan Rate
                </tspan>
              </text>
            </g>
            <RadialBar
              dataKey="inactive"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-inactive)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="active"
              fill="var(--color-active)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
            </div>
          </div>

          {/* Redemption Rate Chart */}
          <div className="bg-white  w-full rounded-lg px-4 pt-4 pb-2">
            <h4 className="text-base font-medium text-[#090909] mb-2">Redemption Rate</h4>
            <div className="relative h-[200px] flex items-end">
              <ChartContainer
                config={redemptionChartConfig}
                className="mx-auto w-full"
                style={{ height: "160px" }}
              >
                <RadialBarChart
                  data={redemptionRateData}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} domain={[0, 100]}/>
                  <g>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x="50%"
                        dy="-0.5em"
                        className="fill-foreground text-2xl font-bold"
                      >
                        37%
                      </tspan>
                      <tspan
                        x="50%"
                        dy="1.5em"
                        className="fill-muted-foreground"
                      >
                        Redemption Rate
                      </tspan>
                    </text>
                  </g>
                  <RadialBar
                    dataKey="inactive"
                    stackId="a"
                    cornerRadius={5}
                    fill="var(--color-inactive)"
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="active"
                    fill="var(--color-active)"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Redemption Value Section */}
        <div className="bg-[#fafafa] rounded-2xl p-6">
          <h4 className="text-base font-medium text-[#090909]">Redemption Value</h4>
          <div className="mt-4 space-y-2">
            <p className="text-2xl font-semibold text-[#090909]">$487,320</p>
            <p className="text-sm text-[#777575]">
              Estimated revenue from retained Allē members, from 782 retained memebers
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};