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

  return (
    <Card className="border-[#dedad7]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-[#090909]">
          Members vs. A-list Members
        </CardTitle>
        <p className="text-sm text-[#787676] font-normal">(24 months rolling)</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          {/* Horizontal Bar Chart - Centered */}
          <div className="w-full py-8">
            <div className="relative w-full h-16 bg-gray-100 rounded-lg overflow-hidden flex">
              {/* Member segment */}
              <div 
                className="h-full bg-[#f9f3f1]"
                style={{ width: `${memberData[0].percentage}%` }}
              />
              {/* A-list segment */}
              <div 
                className="h-full bg-[#b98977]"
                style={{ width: `${memberData[1].percentage}%` }}
              />
            </div>
          </div>

          {/* Bottom section */}
          <div>
            {/* Summary */}
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-sm font-medium text-[#787676] mb-1">Total Members</p>
              <p className="text-3xl font-semibold text-[#090909]">{totalMembers.toLocaleString()}</p>
            </div>

            {/* Legend with values */}
            <div className="flex items-center gap-8 justify-center mt-4 pb-2">
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
        </div>
      </CardContent>
    </Card>
  );
};