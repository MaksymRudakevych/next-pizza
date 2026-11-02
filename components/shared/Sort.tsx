"use client"

import { useState } from "react"
import { Button, DropdownMenu } from "../ui"
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { SORT_OPTIONS } from "@/data"

export const Sort = () => {
  const [activeSort, setActiveSort] = useState("Default")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            className="h-14 w-45 shrink-0 justify-start gap-2 overflow-hidden bg-[#33363b]"
            variant="secondary"
          >
            <ArrowUpDown className="shrink-0 text-white" />
            <span className="shrink-0 text-white">Sort By:</span>
            <span className="truncate font-heading">{activeSort}</span>
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {SORT_OPTIONS.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setActiveSort(item.label)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
