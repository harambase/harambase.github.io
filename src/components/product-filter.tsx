"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ProductFilterProps {
  categories: string[]
  selectedCategories: string[]
  onCategoryChange: (category: string) => void
  clearFilters: () => void
}

export function ProductFilter({
  categories,
  selectedCategories,
  onCategoryChange,
  clearFilters,
}: ProductFilterProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
             Filter by Category
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search category..." />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem
                    key={category}
                    value={category}
                    onSelect={() => {
                      onCategoryChange(category)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCategories.includes(category) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {category}
                  </CommandItem>
                ))}
              </CommandGroup>
              {selectedCategories.length > 0 && (
                <>
                  <Separator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={clearFilters}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedCategories.length > 0 && (
         <div className="flex gap-2">
            {selectedCategories.map(cat => (
                <Badge key={cat} variant="secondary" className="rounded-sm px-1 font-normal">
                    {cat}
                    <Button
                        variant="ghost"
                        className="h-auto w-auto p-0 ml-1 hover:bg-transparent"
                        onClick={() => onCategoryChange(cat)}
                    >
                        <span className="sr-only">Remove</span>
                        <span aria-hidden="true">×</span>
                    </Button>
                </Badge>
            ))}
            <Button 
                variant="ghost" 
                className="h-8 px-2 text-xs"
                onClick={clearFilters}
            >
                Reset
            </Button>
         </div>
      )}
    </div>
  )
}

