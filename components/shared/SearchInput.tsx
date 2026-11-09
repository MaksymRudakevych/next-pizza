import { Search } from "lucide-react"
import { Input, Button } from "../ui"

export const SearchInput = () => {
  return (
    <div className="relative flex flex-1 items-center gap-2">
      <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="search" placeholder="Search..." className="flex-1 pl-10" />
      <Button>Search</Button>
    </div>
  )
}
