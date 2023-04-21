const Header = () => (
  <nav className="w-full bg-zinc-300 py-6">
    <header className="container mx-auto flex flex-row items-center justify-between text-black">
      <div className="text-xl">Eric Boggs</div>
      <div>
        <a href="#work" className="px-2 text-xl font-bold">
          About Me
        </a>
        <a href="#writing" className="px-2 text-xl font-bold">
          Writing
        </a>
        <a href="/" className="px-2 text-xl font-bold">
          Contact
        </a>
      </div>
    </header>
  </nav>
);

export { Header };
