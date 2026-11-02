import { Categories, Sort } from "."

export const TopBar = () => {
  return (
    <div className="sticky top-0 z-100">
      <div className="mt-4 flex items-center justify-between pt-1 pb-1">
        <Categories />
        <Sort />
      </div>
    </div>
  )
}
