function Header() {
  return (
    <header className="flex justify-between mx-[45px] bg-slate-600">
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </header>
  );
}
export default Header;
