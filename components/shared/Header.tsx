import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"
import { Container } from "../shared"
import { Button, Input } from "../ui"

const Header = () => {
  return (
    <header className="border-b border-primary/40">
      <Container className="flex items-center gap-4 py-4">
        <div className="flex shrink-0 items-center gap-3">
          <div className="h-13 w-13 overflow-hidden rounded-full">
            <Image
              src="/logo6.png"
              alt="Raccoon"
              width={156}
              height={156}
              loading="eager"
              className="h-full w-full scale-120 object-cover"
            />
          </div>
          <h4 className="font-heading text-xl font-bold tracking-wide text-primary uppercase">
            raccoon
          </h4>
        </div>

        <div className="relative flex flex-1 items-center gap-2">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="flex-1 pl-10"
          />
          <Button>Search</Button>
        </div>

        <div className="ml-8 flex gap-2">
          <Button className="flex items-center gap-3 px-4">
            <span>1250 ₴</span>

            <span className="h-5 w-px bg-white/30" />

            <span className="flex items-center gap-1.5">
              <ShoppingCart className="size-4" />
              <span>22</span>
            </span>
          </Button>

          {/* <Button>
            <UserRound />
          </Button> */}
          {/* <Button>
            <ShoppingCart className="size-4" />
          </Button> */}
        </div>
      </Container>
    </header>
  )
}

export default Header
