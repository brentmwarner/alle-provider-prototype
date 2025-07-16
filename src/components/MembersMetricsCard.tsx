"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const memberData = [
  {
    name: "Members",
    value: 2789,
    percentage: 88,
    color: "#f9f3f1",
  },
  {
    name: "A-list",
    value: 391,
    percentage: 12,
    color: "#b98977",
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
      <CardContent className="flex flex-col gap-3">
        {/* Main Chart Area - reduced height */}
        <div className="mx-auto w-full h-[220px] flex items-center justify-center">
          <div className="flex items-end gap-10 h-[180px]">
            {memberData.map((item, index) => {
              const heightPercentage = (item.value / maxValue) * 100;
              
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Value above bar */}
                  <div className="text-sm font-semibold text-[#090909] mb-2">
                    {item.value.toLocaleString()}
                  </div>
                  
                  {/* Bar container with reduced height */}
                  <div className="h-[150px] w-16 flex items-end">
                    <div
                      className="w-full rounded-t-md transition-all duration-300"
                      style={{
                        backgroundColor: item.color,
                        height: `${heightPercentage}%`,
                      }}
                    />
                  </div>
                  
                  {/* Label below bar */}
                  <div className="mt-2 text-center">
                    <div className="text-sm text-[#787676]">{item.name}</div>
                    <div className="text-xs text-[#787676]">{item.percentage}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Box - matching pie chart style */}
        <div className="p-3 bg-gray-50 rounded-lg text-center">
          <p className="text-sm font-medium text-[#787676] mb-1">Total Members</p>
          <p className="text-2xl font-semibold text-[#090909]">
            {totalMembers.toLocaleString()}
          </p>
        </div>

        {/* Legend - matching pie chart style */}
        <div className="flex items-center gap-8 justify-center px-4">
          {memberData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-[#787676]">
                {item.name} • {item.value.toLocaleString()} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};