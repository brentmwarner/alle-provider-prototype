import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface BrandUserData {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

const brandUserData: BrandUserData[] = [
  {
    label: "Single Brand Users",
    count: 1817,
    percentage: 57,
    color: "#9a6b5e"
  },
  {
    label: "Two Brand Users", 
    count: 975,
    percentage: 31,
    color: "#B98977"
  },
  {
    label: "3+ Brand Users",
    count: 388,
    percentage: 12,
    color: "#e8d4d1"
  }
];

export const BrandUsersMetricCard = (): JSX.Element => {
  const totalUsers = brandUserData.reduce((sum, data) => sum + data.count, 0);

  return (
    <Card className="border-[#dedad7]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-[#090909]">
          Single Brand Users vs Two Brand Users vs 3+ Brand Users
        </CardTitle>
        <p className="text-sm text-[#787676] font-normal">(24 months rolling)</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Total Active Members */}
          <div className="text-center">
            <p className="text-sm font-medium text-[#787676] mb-1">Total Active Members</p>
            <p className="text-4xl font-semibold text-[#090909] mb-4">{totalUsers.toLocaleString()}</p>
          </div>

          {/* Brand User Segments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {brandUserData.map((segment, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-full h-2 rounded-full mb-3"
                  style={{ backgroundColor: segment.color }}
                ></div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-[#090909]">
                    {segment.count.toLocaleString()} ({segment.percentage}%)
                  </p>
                  <p className="text-sm text-[#787676]">{segment.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Value Banner */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col">
              <p className="text-base font-medium text-[#090909]">Multi-Brand Value</p>
              <p className="text-2xl font-semibold text-[#090909] mt-2 mb-2">43% of Members</p>
              <p className="text-sm text-[#787676]">Members using multiple Allergan brands show higher engagement and lifetime value</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};