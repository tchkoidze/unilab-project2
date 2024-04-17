import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 w-full   bg-slate-600 ${
        isScrolled ? "bg-slate-600" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between mx-[45px]">
        <h1 className="font-kalnia font-medium text-2xl text-white  ">
          ExploreEra
        </h1>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 22.6668H28M4 16.0002H28M4 9.3335H28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </nav>
    </header>
  );
}
export default Header;
