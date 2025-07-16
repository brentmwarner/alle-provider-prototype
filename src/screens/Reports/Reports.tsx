import { useState } from "react";
import { PageTemplate } from "../../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ReportBuilder } from "../../components/ReportBuilder";
import { Toast, useToast } from "../../components/ui/toast";

export const Reports = (): JSX.Element => {
  const [showReportBuilder, setShowReportBuilder] = useState(false);
  const { toast, showToast, hideToast } = useToast();
  const reports = [
    {
      title: "Patient 360 Report",
      description: "The Patient 360 Report gives you a comprehensive view of your patients. It includes information about rewards, treatment statuses, and more.",
      hasDownload: true
    },
    {
      title: "Allergan Aesthetics Last Transaction",
      description: ""
    },
    {
      title: "BOTOX® Cosmetic/JUVÉDERM® Last Transaction",
      description: ""
    },
    {
      title: "Expiring Points",
      description: ""
    },
    {
      title: "Flash Offers",
      description: ""
    },
    {
      title: "Gift Cards",
      description: ""
    },
    {
      title: "Promotions",
      description: ""
    },
    {
      title: "Reimbursements",
      description: ""
    },
    {
      title: "Transactions",
      description: ""
    }
  ];

  const handleGenerateReport = (config: any) => {
    console.log("Generating report with config:", config);
    // TODO: Implement actual report generation logic
    // This would typically call an API endpoint with the config
    
    // Show toast notification
    showToast("Your report is being downloaded");
    
    // Simulate download process (replace with actual download logic)
    setTimeout(() => {
      // This is where the actual download would happen
      console.log("Report download completed");
    }, 1000);
  };

  return (
    <>
    <PageTemplate 
      title="Reports" 
      activeMenuItem="Reports"
      showSearch={false}
      description="Generate and download comprehensive business reports"
      action={
        <Button 
          variant="default" 
          size="xl"
          onClick={() => setShowReportBuilder(true)}
        >
          Download Custom Report
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((report, index) => (
            <Card key={index} className="border-[#dedad7] cursor-pointer rounded-[16px] flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg font-medium text-[#090909]">
                  {report.title}
                </CardTitle>
                {report.description && (
                  <p className="text-sm text-[#787676] mt-2">{report.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {report.hasDownload && (
                    <Button 
                      variant="default" 
                      size="sm"
                      className="text-xs"
                      onClick={() => {
                        showToast("Your report is being downloaded");
                        // TODO: Implement actual download logic
                      }}
                    >
                      Download
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                  >
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
    
    <ReportBuilder
      open={showReportBuilder}
      onOpenChange={setShowReportBuilder}
      onGenerateReport={handleGenerateReport}
    />
    
    <Toast
      message={toast.message}
      show={toast.show}
      onHide={hideToast}
    />
    </>
  );
};