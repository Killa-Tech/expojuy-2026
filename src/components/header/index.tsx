import { useState } from "react"
import { AISearch } from "./ai-search"
import { Logo } from "./logo"
import { MobileMenu, NAV_MENU_NAME, Navigation } from "./navigation"
import type { NavLink } from "./navigation"
import { useFloatingMenu } from "@/contexts/floating-menu"

export const Header = () => {
  const [activeLink, setActiveLink] = useState<NavLink>("Agenda")
  const { isOpen, menu } = useFloatingMenu()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/90 shadow-2xl backdrop-blur-xl transition-all duration-200">
      <div className="mx-auto flex h-24 max-w-[1720px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:gap-8">
        <Logo />
        <AISearch />
        <Navigation activeLink={activeLink} onSelectLink={setActiveLink} />
      </div>
      {isOpen && menu === NAV_MENU_NAME && <MobileMenu activeLink={activeLink} onSelectLink={setActiveLink} />}
    </header>
  )
}