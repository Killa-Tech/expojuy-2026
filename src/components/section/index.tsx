import { Activity, type HTMLAttributes, useEffect, useRef } from "react"
import { useSections, type SectionId } from "@/contexts/sections"
import { cn } from "@/lib/utils"

type SectionProps = Omit<HTMLAttributes<HTMLElement>, "id"> & {
  id: SectionId
  label: string
  minHeight?: string | number
}

export const Section = ({ id, label, className, minHeight, children, ...props }: SectionProps) => {
  const elementRef = useRef<HTMLElement | null>(null)
  const { registerSection, unregisterSection, getSectionState } = useSections()
  const { hasEntered, isVisible } = getSectionState(id)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    registerSection(id, label, element)

    return () => {
      unregisterSection(id, element)
    }
  }, [id, label, registerSection, unregisterSection])

  return (
    <section
      {...props}
      id={id}
      ref={elementRef}
      className={cn("scroll-mt-24", className)}
      style={{
        ...props.style,
        minHeight,
        containIntrinsicSize: minHeight
          ? `auto ${typeof minHeight === "number" ? `${minHeight}px` : minHeight}`
          : undefined,
      }}
    >
      {hasEntered ? (
        <Activity mode={isVisible ? "visible" : "hidden"}>{children}</Activity>
      ) : null}
    </section>
  )
}
