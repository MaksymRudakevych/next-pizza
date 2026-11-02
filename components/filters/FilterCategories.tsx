"use client"

import { CATEGORIES } from "@/data"
import { Accordion, Checkbox, Label } from "../ui"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

export const FilterCategories = () => {
  return (
    <div>
      <p className="mt-6 font-bold">By Category</p>

      <Accordion className="mt-2 max-w-lg">
        {CATEGORIES.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.name}</AccordionTrigger>

            <AccordionContent>
              <div className="flex flex-col gap-2">
                {item.filters.map((option) => (
                  <div key={option.value} className="flex items-center gap-2">
                    <Checkbox value={option.value} name={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
