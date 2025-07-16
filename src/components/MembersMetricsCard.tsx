"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const memberData = [
  {
    name: "Member",
    value: 2789,
    percentage: 88,
    fill: "#f9f3f1",
  },
  {
    name: "A-list",
    value: 391,
    percentage: 12,
    fill: "#b98977",
  },
];

export const MembersMetricsCard = (): JSX.Element => {
  const totalMembers = memberData.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...memberData.map(item => item.value));

  return (
    <Card className="border-[#dedad7]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-[#090909]">
          Members vs. A-list Members
        </CardTitle>
        <p className="text-sm text-[#787676] font-normal">(24 months rolling)</p>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-col gap-3">
          {/* Vertical Bar Chart */}
          <div className="flex items-end justify-center gap-12 h-40">
            {memberData.map((segment, index) => {
              const barHeight = (segment.value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center h-full">
                  {/* Value label above bar with proper spacing */}
                  <div className="text-sm font-semibold text-[#090909] mb-1">
                    {segment.value.toLocaleString()}
                  </div>
                  {/* Bar container */}
                  <div className="relative flex-1 w-20 flex items-end">
                    <div 
                      className="w-full rounded-t-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: segment.fill,
                        height: `${barHeight}%`
                      }}
                    />
                  </div>
                  {/* Label below bar */}
                  <div className="mt-1 text-sm text-[#787676] text-center">
                    {segment.name}
                  </div>
                  <div className="text-xs text-[#787676] text-center">
                    {segment.percentage}%
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="p-2.5 bg-gray-50 rounded-lg text-center">
            <p className="text-sm font-medium text-[#787676]">Total Members</p>
            <p className="text-2xl font-semibold text-[#090909] mt-0.5">{totalMembers.toLocaleString()}</p>
          </div>

          {/* Legend with values */}
          <div className="flex items-center gap-6 justify-center">
            {memberData.map((segment, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: segment.fill }}
                />
                <span className="text-sm text-[#787676]">
                  {segment.name} • {segment.value.toLocaleString()} ({segment.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};