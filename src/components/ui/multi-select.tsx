import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "../../lib/utils"

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  selected: string[]
  onSelectionChange: (selected: string[]) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  maxCount?: number
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onSelectionChange,
  placeholder = "Select options...",
  className,
  disabled = false,
  maxCount = 3,
}) => {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onSelectionChange(selected.filter((s) => s !== value))
    } else {
      onSelectionChange([...selected, value])
    }
  }

  const selectedOptions = options.filter((option) => selected.includes(option.value))

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between text-left font-normal min-h-[40px]",
            !selected.length && "text-gray-500",
            className
          )}
          disabled={disabled}
        >
          <div className="flex gap-1 flex-wrap">
            {selected.length === 0 && placeholder}
            {selectedOptions.slice(0, maxCount).map((option) => (
              <span
                key={option.value}
                className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
              >
                {option.label}
                <X 
                  className="h-3 w-3 cursor-pointer hover:text-gray-600" 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onSelectionChange(selected.filter((s) => s !== option.value))
                  }}
                />
              </span>
            ))}
            {selected.length > maxCount && (
              <span className="inline-flex items-center bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                +{selected.length - maxCount} more
              </span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2" align="start">
        <div className="space-y-1">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 cursor-pointer rounded"
              onClick={() => handleSelect(option.value)}
            >
              <div className={cn(
                "w-4 h-4 border rounded flex items-center justify-center",
                selected.includes(option.value) ? "bg-[#090909] border-[#090909]" : "border-gray-300"
              )}>
                {selected.includes(option.value) && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
              <span className="text-sm">{option.label}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}