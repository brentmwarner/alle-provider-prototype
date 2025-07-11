import { PageTemplate } from "../../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { RetentionChart } from "../../components/RetentionChart";
import { MemberFrequencyChart } from "../../components/MemberFrequencyChart";
import { LifetimeValueChart } from "../../components/LifetimeValueChart";
import { RecruitChart } from "../../components/RecruitChart";
import { ConversionChart } from "../../components/ConversionChart";
import { Tabs, TabsContent, TabsListLine, TabsTriggerLine } from "../../components/ui/tabs";
import { PaymentPlansMetricCard } from "../../components/PaymentPlansMetricCard";
import { BrandUsersMetricCard } from "../../components/BrandUsersMetricCard";

export const Analytics = (): JSX.Element => {
  return (
    <PageTemplate 
      title="Analytics" 
      activeMenuItem="Analytics"
      showSearch={false}
      action={
        <Button variant="default" size="xl">
          Export Analytics
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Analytics Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Total Active Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">3,180</p>
              <p className="text-sm text-[#787676] mt-2">+12% from rolling 24 months</p>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Total Value Redeemed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">$1,096,987</p>
              <p className="text-sm text-[#787676] mt-2">All time in Allē</p>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Reward Amount Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">$142,547</p>
              <p className="text-sm text-[#787676] mt-2">Alle time in Allē</p>
            </CardContent>
          </Card>

          <Card className="border-[#dedad7]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#787676]">Flash Redemption Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-[#090909]">37.13%</p>
              <p className="text-sm text-[#787676] mt-2">+2.78% from benchmark</p>
            </CardContent>
          </Card>
        </div>

        {/* Lifetime Value Chart */}
        <div className="w-full">
          <LifetimeValueChart />
        </div>

        {/* Performance Tabs */}
        <Tabs defaultValue="business" className="w-full">
          <TabsListLine>
            <TabsTriggerLine value="business">Business Performance</TabsTriggerLine>
            <TabsTriggerLine value="brand">Brand Performance</TabsTriggerLine>
            <TabsTriggerLine value="alle">Allē Performance</TabsTriggerLine>
          </TabsListLine>
          
          <TabsContent value="business" className="mt-6">
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RetentionChart />
              <MemberFrequencyChart />
            </div>

            {/* Recruit and Conversion Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <RecruitChart />
              <ConversionChart />
            </div>
          </TabsContent>
          
          <TabsContent value="brand" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PaymentPlansMetricCard />
              <BrandUsersMetricCard />
            </div>
          </TabsContent>
          
          <TabsContent value="alle" className="mt-6">
            <div className="flex items-center justify-center h-64 text-[#787676]">
              <p>Allē Performance content coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
};