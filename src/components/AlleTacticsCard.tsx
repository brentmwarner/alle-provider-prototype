"use client"

import { Card } from "./ui/card";
import { ImageIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "./ui/table";

interface MetricItem {
  label: string;
  value: number;
}

const metrics: MetricItem[] = [
  {
    label: "Accounts with directory profile completion",
    value: 43
  },
  {
    label: "Leads / New Consultations",
    value: 127
  },
  {
    label: "Refer a friend count",
    value: 4
  }
];

export const AlleTacticsCard = (): JSX.Element => {
  return (
    <Card className="border-[#dedad7] p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-xl font-medium text-[#090909]">Allē Tactics</h3>
          <p className="text-sm text-[#787676]">
            See how your Allē features are driving new business to your practice
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-[400px] bg-[#f5f5f5] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="w-16 h-16 text-[#999999] mx-auto mb-2" />
            <p className="text-sm text-[#999999]">Image Placeholder</p>
          </div>
        </div>

        {/* Metrics Table */}
        <Table>
          <TableBody>
            {metrics.map((metric, index) => (
              <TableRow 
                key={index} 
                className="border-b border-[#f5f5f5] last:border-b-0 hover:bg-transparent"
              >
                <TableCell className="text-[#090909] py-4 px-0 font-normal">
                  {metric.label}
                </TableCell>
                <TableCell className="text-[#090909] py-4 text-right pr-0 font-medium">
                  {metric.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};