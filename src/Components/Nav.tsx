import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-whit">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-xl text-gray-600 lg:hidden"
        >
          <img src={hamburger} alt=""  className=""/>
        </button>

        {/* Logo */}
        <img
          src={logo}
          alt="DevStack"
          className="w-24 sm:w-28 md:w-32 lg:w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 font-semibold md:gap-6 lg:flex">
          <li>
            <a href="" className="text-[#d91b7e]">
              Home
            </a>
          </li>

          <li>
            <a href="">Technologies</a>
          </li>

          <li>
            <a href="">Project</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 border-0 lg:hover:not-[]:">

          <div className="flex items-center gap-1 mx-5.5">
  <button className="btn btn-ghost btn-sm">
    Sign In
  </button>

  <button className="btn btn-secondary btn-sm rounded-full">
    Sign Up
  </button>
</div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="container mx-auto flex flex-col gap-4 px-6 py-6 font-semibold">

            <li>
              <a
                href=""
                className="text-[#d91b7e]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href=""
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href=""
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </a>
            </li>

            <li>
              <a
                href=""
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href=""
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;