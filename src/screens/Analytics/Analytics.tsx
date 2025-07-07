import { PageTemplate } from "../../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export const Analytics = (): JSX.Element => {
  return (
    <PageTemplate 
      title="Analytics" 
      activeMenuItem="Analytics"
      showSearch={false}
    >
      <div className="flex flex-col gap-6">
        {/* Analytics Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">1,234</p>
              <p className="text-sm text-[#787676] mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">$45,678</p>
              <p className="text-sm text-[#787676] mt-1">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">234</p>
              <p className="text-sm text-[#787676] mt-1">This week</p>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">96%</p>
              <p className="text-sm text-[#787676] mt-1">Patient rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-[#dedad7]">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[#090909]">Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-[#787676]">Chart placeholder - Revenue over time</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[#090909]">Patient Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-[#787676]">Chart placeholder - Age distribution</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Analytics */}
        <Card className="border-[#dedad7]">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#090909]">Popular Treatments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#090909]">Botox Injections</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#9a6b5e] h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-[#090909]">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#090909]">Chemical Peels</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#9a6b5e] h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-[#090909]">60%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#090909]">Laser Treatments</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#9a6b5e] h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-[#090909]">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#090909]">Dermal Fillers</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#9a6b5e] h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-[#090909]">30%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
};