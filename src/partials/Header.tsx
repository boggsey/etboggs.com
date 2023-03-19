const Header = () => (
  <header className="absolute z-50 ml-[2.5%] flex h-[100px] w-[100px] justify-center bg-gray-800 py-5 px-12 text-center md:fixed md:justify-start">
    {/* font: 400 45px/55px "gentium book basic"; */}
    <div className="flex justify-center text-center">
      <a
        className="text-5xl font-normal leading-relaxed text-white no-underline"
        href="/"
      >
        EB
      </a>
    </div>
  </header>
);

export { Header };
