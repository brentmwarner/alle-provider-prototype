"use client"

import { useState } from "react"
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

const brandData = {
  botox: {
    data: [
      { year: "2025", members: 892 },
      { year: "2024", members: 743 },
    ],
    successMembers: 945,
  },
  juvederm: {
    data: [
      { year: "2025", members: 703 },
      { year: "2024", members: 658 },
    ],
    successMembers: 782,
  },
  skinmedica: {
    data: [
      { year: "2025", members: 456 },
      { year: "2024", members: 412 },
    ],
    successMembers: 523,
  },
}

export function ConversionChart() {
  const [selectedBrand, setSelectedBrand] = useState<keyof typeof brandData>("botox")
  const currentData = brandData[selectedBrand]
  return (
    <Card className="border-[#dedad7]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-[#090909]">Conversion</CardTitle>
        <CardDescription className="text-sm text-[#787676] font-normal">
          See how many patients were converted to another brand within your practice.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#090909] block mb-1">
              Select conversion brand
            </label>
            <Select value={selectedBrand} onValueChange={(value) => setSelectedBrand(value as keyof typeof brandData)}>
              <SelectTrigger className="w-48 h-9 text-sm border-[#e0e0e0] text-[#090909]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="botox">BOTOX®</SelectItem>
                <SelectItem value="juvederm">JUVÉDERM®</SelectItem>
                <SelectItem value="skinmedica">SkinMedica®</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {currentData.data.map((data, index) => {
              const maxValue = Math.max(...currentData.data.map(d => d.members))
              return (
                <div key={data.year} className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <div className="text-2xl font-semibold text-[#090909]">
                      {data.members}
                    </div>
                    <div className="text-sm text-[#787676]">members</div>
                  </div>
                  <div className={`relative h-10 ${index === 0 ? 'bg-[#B98977]' : 'bg-[#e8d4d1]'} rounded`} style={{ width: `${(data.members / maxValue) * 100}%` }}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-medium">
                      {data.year}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-[#090909]">Conversion Success Rate</p>
              <p className="text-sm text-[#787676] mt-1">
                Projected revenue from {currentData.successMembers} Allē members who successfully transitioned to a new product.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}