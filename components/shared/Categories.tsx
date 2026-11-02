"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CATEGORIES } from "@/data"
import { useCategoryStore } from "@/store/category"
import { CategoryValue } from "@/types"
import Link from "next/link"

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  const setActiveId = useCategoryStore((state) => state.setActiveId)
  return (
    <Tabs
      value={categoryActiveId}
      onValueChange={(value) => setActiveId(value as CategoryValue)}
    >
      <TabsList>
        {CATEGORIES.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            nativeButton={false}
            render={<Link href={`#${category.value}`} />}
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
