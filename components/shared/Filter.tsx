"use client"

import { FilterOffers, FilterPrice, FilterCategories } from "../filters"
import { Title } from "./Title"

export const Filter = () => {
  return (
    <div>
      <Title
        text="Filters"
        size="sm"
        className="mb-6 border-b border-b-primary pb-6 font-bold"
      />

      <FilterOffers />

      <FilterPrice />

      <FilterCategories />
    </div>
  )
}
