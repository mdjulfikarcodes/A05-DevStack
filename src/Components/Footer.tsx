import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-1">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div className="text-center lg:text-left">
            <img
              src={logo}
              alt="Dev Stack"
              className="mx-auto w-28 lg:mx-0"
            />

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500 lg:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center justify-center gap-5 text-sm font-medium text-slate-700 lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d91b7e]"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d91b7e]"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d91b7e]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden lg:block mx-22">
            <h3 className="text-sm font-bold text-slate-800">
              PRODUCT
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  Home
                </a>
              </li>

              <li>
                <a href="#technologies" className="hover:text-[#d91b7e]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden lg:block mx-22">
            <h3 className="text-sm font-bold text-slate-800">
              COMPANY
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden lg:block mx-22">
            <h3 className="text-sm font-bold text-slate-800">
              LEGAL
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b7e]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-[#d91b7e]">
                Privacy
              </a>

              <a href="#" className="hover:text-[#d91b7e]">
                Terms
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;