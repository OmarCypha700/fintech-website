export default function Nav() {
  const openHamburger = () => {
    const mobileNav = document.querySelector("#mobile-nav");
    if (mobileNav.classList.contains("hidden")) {
      mobileNav.classList.remove("hidden");
    }
  };

  const closeHamburger = () => {
    const mobileNav = document.querySelector("#mobile-nav");
    if (!mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("hidden");
    }
  };

  return (
    <>
      <div className="shadow rounded flex justify-around py-4">
        <div className="font-bold cursor-pointer">LOGO</div>
        <div className="flex ">
          <div className="hidden md:block ">
            <ul className=" flex gap-6 px-14 ">
              <li className="nav-link">About Us</li>
              <li className="nav-link">Blog</li>
              <li className="nav-link">Pricing</li>
              <li className="nav-link">Features</li>
            </ul>
          </div>

          <div className="flex gap-6 ">
            <button className="btn ">Log In</button>
            <button className="btn ">Sign Up</button>
          </div>
        </div>
        <div
          onClick={openHamburger}
          id="burger"
          className=" cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div
        id="mobile-nav"
        className=" hidden top-0 right-0 h-screen absolute p-14 bg-gray-400"
      >
        <div
          onClick={closeHamburger}
          id="close"
          className="absolute top-4 left-6 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <ul className=" flex flex-col gap-6 py-14 font-semibold text-lg ">
          <li>About Us</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
    </>
  );
}
