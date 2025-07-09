import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MultiSelect } from "./ui/multi-select";

interface ReportBuilderProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGenerateReport: (config: ReportConfig) => void;
}

interface ReportConfig {
  timeFrame: string;
  reportType: string;
  dataType: string[];
  treatedWithBrands?: string[];
  notTreatedWithBrand?: string;
  filters?: {
    pointBalance?: boolean;
    activePromotions?: boolean;
    giftCardBalance?: boolean;
    paymentPlan?: boolean;
    flashOffers?: boolean;
  };
}

const timeFrameOptions = [
  { value: "30", label: "Last 30 days" },
  { value: "60", label: "Last 60 days" },
  { value: "90", label: "Last 90 days" },
  { value: "365", label: "Last 12 months" },
];

const reportTypes = [
  {
    value: "patient360",
    label: "Patient 360 Report",
    description: "The Patient 360 Report gives you a comprehensive view of your patients. It includes information about rewards, treatment statuses, and more.",
    availableData: ["treated_not_treated", "additional_filters"]
  },
  {
    value: "allergan_last_transaction",
    label: "Allergan Aesthetics Last Transaction",
    description: "Track the last transaction for Allergan Aesthetics products",
    availableData: ["transaction_details", "product_info", "customer_data"]
  },
  {
    value: "botox_juvederm_last_transaction",
    label: "BOTOX® Cosmetic/JUVÉDERM® Last Transaction",
    description: "Last transaction details for BOTOX® Cosmetic and JUVÉDERM® products",
    availableData: ["transaction_details", "product_info", "customer_data"]
  },
  {
    value: "expiring_points",
    label: "Expiring Points",
    description: "View points that are about to expire",
    availableData: ["expiration_dates", "point_amounts", "customer_info"]
  },
  {
    value: "flash_offers",
    label: "Flash Offers",
    description: "Active flash offers and their performance",
    availableData: ["offer_details", "redemption_rates", "performance_metrics"]
  },
  {
    value: "gift_cards",
    label: "Gift Cards",
    description: "Gift card balances and usage",
    availableData: ["card_balances", "usage_history", "customer_info"]
  },
  {
    value: "promotions",
    label: "Promotions",
    description: "Active promotions and their performance",
    availableData: ["promotion_details", "redemption_rates", "performance_metrics"]
  },
  {
    value: "reimbursements",
    label: "Reimbursements",
    description: "Reimbursement tracking and status",
    availableData: ["reimbursement_status", "amounts", "customer_info"]
  },
  {
    value: "transactions",
    label: "Transactions",
    description: "Detailed transaction history and summaries",
    availableData: ["transaction_history", "payment_methods", "customer_data"]
  },
];

const brandOptions = [
  { value: "botox_cosmetic", label: "BOTOX® Cosmetic" },
  { value: "juvederm", label: "JUVÉDERM®" },
  { value: "latisse", label: "Latisse®" },
  { value: "cooltone", label: "CoolTone®" },
  { value: "diamond_glow", label: "DiamondGlow®" },
  { value: "skin_medica", label: "SkinMedica®" },
  { value: "skinviv", label: "SkinVive® by JUVÉDERM®" },
];

const dataTypeLabels: Record<string, string> = {
  // Patient 360 specific
  treated_not_treated: "Treated With and Not Treated With Brands",
  additional_filters: "Additional Filters",
  
  // General data types
  transaction_details: "Transaction Details",
  product_info: "Product Information",
  customer_data: "Customer Data",
  customer_info: "Customer Information",
  expiration_dates: "Expiration Dates",
  point_amounts: "Point Amounts",
  offer_details: "Offer Details",
  redemption_rates: "Redemption Rates",
  performance_metrics: "Performance Metrics",
  card_balances: "Card Balances",
  usage_history: "Usage History",
  promotion_details: "Promotion Details",
  reimbursement_status: "Reimbursement Status",
  amounts: "Amounts",
  transaction_history: "Transaction History",
  payment_methods: "Payment Methods",
};

export const ReportBuilder = ({ open, onOpenChange, onGenerateReport }: ReportBuilderProps) => {
  const [step, setStep] = useState(1);
  const [timeFrame, setTimeFrame] = useState("");
  const [reportType, setReportType] = useState("");
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [treatedWithBrands, setTreatedWithBrands] = useState<string[]>([]);
  const [notTreatedWithBrand, setNotTreatedWithBrand] = useState("");
  const [filters, setFilters] = useState({
    pointBalance: false,
    activePromotions: false,
    giftCardBalance: false,
    paymentPlan: false,
    flashOffers: false,
  });

  const selectedReportType = reportTypes.find(rt => rt.value === reportType);
  const availableDataTypes = selectedReportType?.availableData || [];

  const handleNext = () => {
    if (step === 1 && timeFrame) {
      setStep(2);
    } else if (step === 2 && reportType) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenerateReport = () => {
    if (timeFrame && reportType && selectedData.length > 0) {
      onGenerateReport({
        timeFrame,
        reportType,
        dataType: selectedData,
        treatedWithBrands: treatedWithBrands.length > 0 ? treatedWithBrands : undefined,
        notTreatedWithBrand: notTreatedWithBrand || undefined,
        filters,
      });
      // Reset state
      setStep(1);
      setTimeFrame("");
      setReportType("");
      setSelectedData([]);
      setTreatedWithBrands([]);
      setNotTreatedWithBrand("");
      setFilters({
        pointBalance: false,
        activePromotions: false,
        giftCardBalance: false,
        paymentPlan: false,
        flashOffers: false,
      });
      onOpenChange(false);
    }
  };

  const toggleDataType = (dataType: string) => {
    setSelectedData(prev => 
      prev.includes(dataType) 
        ? prev.filter(d => d !== dataType)
        : [...prev, dataType]
    );
  };

  const isNextDisabled = () => {
    if (step === 1) return !timeFrame;
    if (step === 2) return !reportType;
    return false;
  };

  const isGenerateDisabled = () => {
    return !timeFrame || !reportType || selectedData.length === 0;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>Generate New Report</DialogTitle>
          <DialogDescription>
            Build a custom report by selecting your parameters. Step {step} of 3
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4 px-6 pb-6">
          {step === 1 && (
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="timeframe">Select Time Frame</Label>
                <Select value={timeFrame} onValueChange={setTimeFrame}>
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Choose a time frame" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeFrameOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label>Select Report Type</Label>
              <RadioGroup value={reportType} onValueChange={setReportType}>
                <div className="grid gap-3">
                  {reportTypes.map((type) => (
                    <Card 
                      key={type.value} 
                      className={`cursor-pointer transition-all ${
                        reportType === type.value ? 'border-[#090909] bg-[#FAFAFA]' : 'border-[#dedad7]'
                      }`}
                      onClick={() => setReportType(type.value)}
                    >
                      <CardHeader className="space-y-1 pb-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={type.value} id={type.value} />
                          <Label htmlFor={type.value} className="text-base font-medium cursor-pointer">
                            {type.label}
                          </Label>
                        </div>
                      </CardHeader>
                      {type.description && (
                        <CardContent className="pt-0">
                          <CardDescription className="text-sm text-[#787676]">
                            {type.description}
                          </CardDescription>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <Label>Select Data to Include</Label>
                <div className="text-sm text-[#787676] mb-3">
                  Choose the specific data you want in your {selectedReportType?.label}
                </div>
                <div className="grid gap-3">
                  {availableDataTypes.map((dataType) => (
                    <Card 
                      key={dataType}
                      className={`cursor-pointer transition-all ${
                        selectedData.includes(dataType) ? 'border-[#090909] bg-[#FAFAFA]' : 'border-[#dedad7]'
                      }`}
                      onClick={() => toggleDataType(dataType)}
                    >
                      <CardContent className="flex items-center space-x-3 py-3">
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          selectedData.includes(dataType) 
                            ? 'border-[#090909] bg-[#090909]' 
                            : 'border-gray-300'
                        }`}>
                          {selectedData.includes(dataType) && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <Label className="cursor-pointer flex-1">
                          {dataTypeLabels[dataType]}
                        </Label>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Patient 360 Specific Filters */}
              {reportType === "patient360" && selectedData.includes("treated_not_treated") && (
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <Label className="text-base font-medium">Treated With and Not Treated With</Label>
                    <div className="text-sm text-[#787676] mb-4">
                      Configure brand filters for your Patient 360 report
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="treated-with">Treated With (Multiple Selection)</Label>
                        <div className="mt-2">
                          <MultiSelect
                            options={brandOptions}
                            selected={treatedWithBrands}
                            onSelectionChange={setTreatedWithBrands}
                            placeholder="Select brands patients are treated with..."
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="not-treated-with">Not Treated With (Single Selection)</Label>
                        <div className="mt-2">
                          <Select value={notTreatedWithBrand} onValueChange={setNotTreatedWithBrand}>
                            <SelectTrigger id="not-treated-with">
                              <SelectValue placeholder="Select brand patients are not treated with..." />
                            </SelectTrigger>
                            <SelectContent>
                              {brandOptions.map((brand) => (
                                <SelectItem key={brand.value} value={brand.value}>
                                  {brand.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Filters for Patient 360 */}
              {reportType === "patient360" && selectedData.includes("additional_filters") && (
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <Label className="text-base font-medium">Additional Filters</Label>
                    <div className="text-sm text-[#787676] mb-4">
                      Select additional criteria to filter your Patient 360 report
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { key: "pointBalance", label: "Has Point Balance" },
                        { key: "activePromotions", label: "Has Active Promotions in Wallet" },
                        { key: "giftCardBalance", label: "Has Gift Card Balance" },
                        { key: "paymentPlan", label: "Has Payment Plan" },
                        { key: "flashOffers", label: "Has Flash Offers" },
                      ].map((filter) => (
                        <Card 
                          key={filter.key}
                          className={`cursor-pointer transition-all ${
                            filters[filter.key as keyof typeof filters] ? 'border-[#090909] bg-[#FAFAFA]' : 'border-[#dedad7]'
                          }`}
                          onClick={() => setFilters(prev => ({ ...prev, [filter.key]: !prev[filter.key as keyof typeof prev] }))}
                        >
                          <CardContent className="flex items-center space-x-3 py-3">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              filters[filter.key as keyof typeof filters]
                                ? 'border-[#090909] bg-[#090909]' 
                                : 'border-gray-300'
                            }`}>
                              {filters[filter.key as keyof typeof filters] && (
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            <Label className="cursor-pointer flex-1">
                              {filter.label}
                            </Label>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between flex-shrink-0 border-t pt-4 mt-4 px-6 pb-6">
          <div className="flex gap-2">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            {step < 3 ? (
              <Button 
                variant="default" 
                onClick={handleNext}
                disabled={isNextDisabled()}
              >
                Next
              </Button>
            ) : (
              <Button 
                variant="default" 
                onClick={handleGenerateReport}
                disabled={isGenerateDisabled()}
              >
                Generate Report
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};