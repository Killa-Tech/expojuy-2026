export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-primary p-4 text-primary-foreground">
      <h1 className="text-xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}