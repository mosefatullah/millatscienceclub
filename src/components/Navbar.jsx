import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return systemTheme;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <nav className="z-50 sticky top-0 left-0 bg-white dark:bg-primary p-2 lg:py-4 flex items-center justify-between border-b-1 border-gray-700/20 dark:border-gray-100/20">
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
            ["Events", "/events"],
            ["Projects", "/projects"],
            ["Resources", "/resources"],
            ["Contact Us", "/contact-us"],
          ].map((v, i) => (
            <NavLink
              to={v[1]}
              key={i}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-black dark:text-white underline"
                    : "text-gray-800 dark:text-gray-400"
                }`
              }
            >
              <li>{v[0]}</li>
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Button
            dark
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="!p-1.5 !rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800" />
            )}
          </Button>

          <Link to="/register" className="hidden sm:block">
            <Button>Register Now!</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
