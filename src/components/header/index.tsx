import { useState } from "react"
import { AISearch } from "./ai-search"
import { Logo } from "./logo"
import { MobileMenu, Navigation } from "./navigation"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#121214]/90 shadow-2xl backdrop-blur-xl transition-all duration-200">
      <div className="mx-auto flex h-24 max-w-[1720px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:gap-8">
        <Logo />
        <AISearch />
        <Navigation onToggleMobileMenu={() => setIsMobileMenuOpen((isOpen) => !isOpen)} />
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  )
}