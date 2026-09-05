import { AISearch } from "./ai-search"
import { Logo } from "./logo"
import { MobileMenu, NAV_MENU_NAME, Navigation } from "./navigation"
import { useFloatingMenu } from "@/contexts/floating-menu"
import { useNavbar } from "@/hooks/use-navbar"

export const Header = () => {
  const { links, activeSection, selectSection } = useNavbar()
  const { isOpen, menu } = useFloatingMenu()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/90 shadow-2xl backdrop-blur-xl transition-all duration-200">
      <div className="mx-auto flex h-24 max-w-[1720px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:gap-8">
        <Logo />
        <AISearch />
        <Navigation links={links} activeSection={activeSection} onSelectSection={selectSection} />
      </div>
      {isOpen && menu === NAV_MENU_NAME && <MobileMenu links={links} activeSection={activeSection} onSelectSection={selectSection} />}
    </header>
  )
}