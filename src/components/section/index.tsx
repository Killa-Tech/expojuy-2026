import type { HTMLAttributes } from "react"
import { useEffect, useRef } from "react"
import { useSections, type SectionId } from "@/contexts/sections"
import { cn } from "@/lib/utils"

type SectionProps = Omit<HTMLAttributes<HTMLElement>, "id"> & {
  id: SectionId
  label: string
}

export const Section = ({ id, label, className, children, ...props }: SectionProps) => {
  const elementRef = useRef<HTMLElement | null>(null)
  const { registerSection, unregisterSection } = useSections()

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
    >
      {children}
    </section>
  )
}
