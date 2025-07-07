import { PageTemplate } from "../../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export const Reports = (): JSX.Element => {
  const reports = [
    {
      title: "Monthly Revenue Report",
      description: "Comprehensive breakdown of revenue streams and performance metrics",
      date: "Generated: January 2024",
      type: "Financial"
    },
    {
      title: "Patient Satisfaction Survey",
      description: "Quarterly analysis of patient feedback and satisfaction scores",
      date: "Generated: Q4 2023",
      type: "Customer"
    },
    {
      title: "Treatment Effectiveness Analysis",
      description: "Clinical outcomes and effectiveness metrics for all treatment types",
      date: "Generated: December 2023",
      type: "Clinical"
    },
    {
      title: "Staff Performance Review",
      description: "Individual and team performance metrics with KPI tracking",
      date: "Generated: December 2023",
      type: "HR"
    },
    {
      title: "Inventory Usage Report",
      description: "Product usage patterns and inventory optimization recommendations",
      date: "Generated: January 2024",
      type: "Operations"
    },
    {
      title: "Marketing Campaign ROI",
      description: "Performance analysis of marketing initiatives and customer acquisition",
      date: "Generated: Q4 2023",
      type: "Marketing"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Financial: "bg-blue-100 text-blue-800",
      Customer: "bg-green-100 text-green-800",
      Clinical: "bg-purple-100 text-purple-800",
      HR: "bg-yellow-100 text-yellow-800",
      Operations: "bg-orange-100 text-orange-800",
      Marketing: "bg-pink-100 text-pink-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <PageTemplate 
      title="Reports" 
      activeMenuItem="Reports"
      showSearch={false}
    >
      <div className="flex flex-col gap-6">
        {/* Report Generation Actions */}
        <div className="flex justify-between items-center">
          <p className="text-[#787676]">Generate and download comprehensive business reports</p>
          <Button 
            className="bg-[#9a6b5e] hover:bg-[#8a5b4e] text-white"
          >
            Generate New Report
          </Button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report, index) => (
            <Card key={index} className="border-[#dedad7] hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-medium text-[#090909]">
                    {report.title}
                  </CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(report.type)}`}>
                    {report.type}
                  </span>
                </div>
                <p className="text-sm text-[#787676]">{report.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#787676]">{report.date}</span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs border-[#dedad7] hover:bg-[#c086761f]"
                    >
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs border-[#dedad7] hover:bg-[#c086761f]"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="border-[#dedad7] mt-6">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#090909]">Quick Report Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="justify-start border-[#dedad7] hover:bg-[#c086761f]"
              >
                <span className="text-sm">📊 Export All Data</span>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-[#dedad7] hover:bg-[#c086761f]"
              >
                <span className="text-sm">📅 Schedule Reports</span>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-[#dedad7] hover:bg-[#c086761f]"
              >
                <span className="text-sm">⚙️ Report Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
};