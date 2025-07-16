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

export const MembersMetricsCardV2 = (): JSX.Element => {
  const totalMembers = memberData.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...memberData.map(item => item.value));

  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-[#090909]">
          Members vs. A-list Members
        </CardTitle>
        <p className="text-sm text-[#787676] font-normal">(24 months rolling)</p>
      </CardHeader>
      <CardContent className="pt-0 pb-3">
        {/* Chart Container */}
        <div className="flex flex-col gap-4">
          {/* Bars Section */}
          <div className="flex justify-center items-end gap-16 h-36">
            {memberData.map((item, index) => {
              const heightPercentage = (item.value / maxValue) * 100;
              
              return (
                <div key={index} className="flex flex-col items-center h-full">
                  {/* Value Label */}
                  <span className="text-sm font-semibold text-[#090909] mb-1">
                    {item.value.toLocaleString()}
                  </span>
                  
                  {/* Bar container */}
                  <div className="flex-1 w-16 flex items-end">
                    <div
                      className="w-full rounded-t transition-all duration-300 ease-out"
                      style={{
                        backgroundColor: item.color,
                        height: `${heightPercentage}%`,
                      }}
                    />
                  </div>
                  
                  {/* Name and Percentage */}
                  <div className="mt-1.5 text-center">
                    <div className="text-sm text-[#787676]">{item.name}</div>
                    <div className="text-xs text-[#787676]">{item.percentage}%</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Summary */}
          <div className="bg-gray-50 rounded-lg py-2 px-4 text-center">
            <p className="text-sm text-[#787676]">Total Members</p>
            <p className="text-2xl font-semibold text-[#090909]">
              {totalMembers.toLocaleString()}
            </p>
          </div>

          {/* Legend */}
          <div className="flex justify-center items-center gap-6 text-sm pb-1">
            {memberData.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[#787676]">
                  {item.name} • {item.value.toLocaleString()} ({item.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};