import { Link, NavLink } from "react-router";
import Button from "./Button";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    window.onscroll = function () {
      if (document.querySelector("._navbar")) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          document.querySelector("._navbar").classList.add("!bg-gray-800/50", "backdrop-blur-xl");
        } else {
          document
            .querySelector("._navbar")
            .classList.remove("!bg-gray-800/50", "backdrop-blur-xl");
        }
      }
    };
  }, []);
  return (
    <>
      <nav className="_navbar z-50 sticky top-0 left-0 bg-primary p-2 lg:py-4 flex items-center justify-between border-b-1 border-gray-100/20">
        <div className="flex items-center gap-1 sm:gap-3">
          <img src="/msc.png" alt="LOGO" className="w-14 h-14" />
          <h1 className="text-sm max-w-[150px] sm:max-w-none sm:text-xl font-medium">
            MILLAT SCIENCE CLUB
          </h1>
        </div>
        <ul className="hidden xl:flex gap-8">
          {[
            ["Home", "/"],
            ["About Us", "/about-us"],
            ["Events & Activities", "/events"],
            ["Projects & Research", "/projects"],
            ["Contact Us", "/contact-us"],
          ].map((v, i) => (
            <NavLink
              to={v[1]}
              className={({ isActive }) =>
                `text-gray-400 ${isActive && "text-white underline"}`
              }
            >
              <li key={i}>{v[0]}</li>
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center">
          <Link to="/register" className="hidden sm:block">
            <Button>Register Now!</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
