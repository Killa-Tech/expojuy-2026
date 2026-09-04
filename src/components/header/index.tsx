import { useState } from "react"
import { AISearch } from "./ai-search"
import { Logo } from "./logo"
import { MobileMenu, Navigation } from "./navigation"
import type { NavLink } from "./navigation"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<NavLink>("Agenda")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/90 shadow-2xl backdrop-blur-xl transition-all duration-200">
      <div className="mx-auto flex h-24 max-w-[1720px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:gap-8">
        <Logo />
        <AISearch />
        <Navigation activeLink={activeLink} onSelectLink={setActiveLink} onToggleMobileMenu={() => setIsMobileMenuOpen((isOpen) => !isOpen)} />
      </div>
      {isMobileMenuOpen && <MobileMenu activeLink={activeLink} onSelectLink={setActiveLink} />}
    </header>
  )
}