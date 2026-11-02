import clsx from "clsx"

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

interface Props {
  size?: TitleSize
  className?: string
  text: string
}

export const Title = ({ text, size = "sm", className }: Props) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const

  const mapClassNameBySize = {
    xs: "text-[16px] ys-text text-primary",
    sm: "text-[22px] ys-text text-primary",
    md: "text-[26px] ys-text text-primary",
    lg: "text-[32px] ys-display text-primary",
    xl: "text-[40px] ys-display text-primary",
    "2xl": "text-[48px] ys-display text-primary",
  } as const

  const Tag = mapTagBySize[size]

  return <Tag className={clsx(mapClassNameBySize[size], className)}>{text}</Tag>
}
