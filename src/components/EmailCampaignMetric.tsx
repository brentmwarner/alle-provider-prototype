"use client"

import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const campaignData = [
  {
    campaign: "Accounts With Expiring Points Automation Enabled",
    amount: 3,
    openRate: "60%",
    clickRate: "45%",
  },
  {
    campaign: "Patients Treated with BOTOX® Cosmetic",
    amount: 2,
    openRate: "60%",
    clickRate: "23%",
  },
  {
    campaign: "Patients Treated with JUVÉDERM® Cosmetic",
    amount: 2,
    openRate: "80%",
    clickRate: "80%",
  },
  {
    campaign: "Offer for JBOTOX® Cosmetic Lapsed Patients (treated over 12 months ago)",
    amount: 105,
    openRate: "87%",
    clickRate: "87%",
  },
];

export const EmailCampaignMetric = (): JSX.Element => {
  return (
    <Card className="border-[#dedad7] p-6">
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-medium text-[#090909]">Email Campaign Performance</h3>
          <p className="text-sm text-[#787676] mt-1">
            Effectiveness of your recent email campaigns
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-b-0 hover:bg-transparent">
              <TableHead className="text-[#787676] font-medium h-8 px-0">Campaign</TableHead>
              <TableHead className="text-[#787676] font-medium h-8 text-right">Amount</TableHead>
              <TableHead className="text-[#787676] font-medium h-8 text-right">Open Rate</TableHead>
              <TableHead className="text-[#787676] font-medium h-8 text-right pr-0">Click Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaignData.map((row, index) => (
              <TableRow 
                key={index} 
                className="border-b border-[#f5f5f5] last:border-b-0 hover:bg-transparent"
              >
                <TableCell className="text-[#090909] py-4 px-0 font-normal">
                  {row.campaign}
                </TableCell>
                <TableCell className="text-[#090909] py-4 text-right font-normal">
                  {row.amount}
                </TableCell>
                <TableCell className="text-[#090909] py-4 text-right font-normal">
                  {row.openRate}
                </TableCell>
                <TableCell className="text-[#090909] py-4 text-right pr-0 font-normal">
                  {row.clickRate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};