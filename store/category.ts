import { create } from "zustand"
import type { CategoryValue } from "@/types"

interface State {
  activeId: CategoryValue
  setActiveId: (activeId: CategoryValue) => void
}

export const useCategoryStore = create<State>((set) => ({
  activeId: "pizza",
  setActiveId: (activeId: CategoryValue) => set({ activeId }),
}))
