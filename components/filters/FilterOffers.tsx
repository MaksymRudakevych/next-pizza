"use client"

import { OFFER_FILTERS } from "@/data"
import { Checkbox, Field, Label } from "../ui"
import { FieldGroup } from "../ui/field"

export const FilterOffers = () => {
  return (
    <div>
      <p className="mb-6 font-bold">Offers</p>

      <FieldGroup className="max-w-sm">
        {OFFER_FILTERS.map((item) => (
          <Field key={item.value} orientation="horizontal">
            <Checkbox value={item.value} name={item.value} />
            <Label htmlFor={item.value}>{item.label}</Label>
          </Field>
        ))}
      </FieldGroup>
    </div>
  )
}
