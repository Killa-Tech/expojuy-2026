type NavigationProps = {
  onToggleMobileMenu: () => void
}

const links = ["Inicio", "Agenda", "Expositores"]

const LinkList = ({ mobile = false }: { mobile?: boolean }) => (
  <nav className={mobile ? "flex flex-col space-y-1 font-semibold text-base" : "hidden items-center gap-1 font-semibold text-sm lg:flex"}>
    {links.map((link) => {
      const isActive = link === "Agenda"
      return (
        <a key={link} href="#" aria-current={isActive ? "page" : undefined} className={mobile ? `flex items-center justify-between rounded-xl px-4 py-2.5 ${isActive ? "border border-[#791AC7]/40 bg-[#791AC7]/30 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"}` : `rounded-xl px-3.5 py-2 ${isActive ? "flex items-center gap-1.5 border border-white/10 bg-white/10 font-bold text-white shadow-inner" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}>
          {isActive && !mobile && <span className="h-1.5 w-1.5 rounded-full bg-[#00C2CB]" />}
          <span>{link}</span>
          {isActive && mobile && <span className="rounded-full bg-[#00C2CB] px-2 py-0.5 text-xs font-bold text-black">Activa</span>}
        </a>
      )
    })}
  </nav>
)

export const Navigation = ({ onToggleMobileMenu }: NavigationProps) => (
  <div className="flex shrink-0 items-center gap-2 md:gap-5">
    <LinkList />
    <div className="flex items-center gap-2">
      <button type="button" onClick={onToggleMobileMenu} className="rounded-xl p-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-white lg:hidden" aria-label="Abrir menú de navegación"><span className="text-2xl" aria-hidden="true">☰</span></button>
    </div>
  </div>
)

export const MobileMenu = () => (
  <div className="border-t border-white/10 bg-[#121214] px-6 py-5 lg:hidden"><LinkList mobile /></div>
)