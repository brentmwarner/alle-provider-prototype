"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const chartData = [
  { 
    year: "2024",
    members: 658,
  },
  { 
    year: "2025",
    members: 703,
  },
]

export function ConversionChart() {
  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-[#090909]">Conversion</CardTitle>
        <CardDescription className="text-sm text-[#787676] font-normal">
          See how many patients were converted to another brand within your practice.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-[#090909] block mb-2">
              Select conversion brand
            </label>
            <Select defaultValue="juvederm">
              <SelectTrigger className="w-full h-10 text-sm border-[#e0e0e0] text-[#090909]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="juvederm">JUVÉDERM®</SelectItem>
                <SelectItem value="botox">BOTOX®</SelectItem>
                <SelectItem value="skinmedica">SkinMedica®</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {chartData.map((data) => (
              <div key={data.year} className="flex items-center gap-4">
                <div className="text-2xl font-semibold text-[#090909] w-24">
                  {data.members}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-[#787676]">members</div>
                    <div className="relative flex-1 h-12 bg-[#b8998d] rounded">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-medium">
                        {data.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}