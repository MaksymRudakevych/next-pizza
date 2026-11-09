import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Container, SearchInput } from "../shared"
import { Button } from "../ui"
import Link from "next/link"

const Header = () => {
  return (
    <header className="border-b border-primary/40">
      <Container className="flex items-center gap-4 py-4">
        <div className="flex shrink-0 items-center gap-3">
          <div className="h-13 w-13 overflow-hidden rounded-full">
            <Link href="/">
              <Image
                src="/logo6.png"
                alt="Raccoon"
                width={156}
                height={156}
                loading="eager"
                className="h-full w-full scale-120 object-cover"
              />
            </Link>
          </div>
          <h4 className="font-heading text-xl font-bold tracking-wide text-primary uppercase">
            raccoon
          </h4>
        </div>
        <SearchInput />

        <div className="ml-8 flex gap-2">
          <Button className="flex items-center gap-3 px-4">
            <span>1250 ₴</span>
            <span className="h-5 w-px bg-white/30" />
            <span className="flex items-center gap-1.5">
              <ShoppingCart className="size-4" />
              <span>22</span>
            </span>
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
