import { Link, NavLink } from "react-router";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Submenu from "./Submenu";

function Navbar() {
 const [theme, setTheme] = useState(() => {
  const storedTheme = localStorage.getItem("theme");
  return (
   storedTheme ||
   (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light")
  );
 });

 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuRef = useRef(null);

 useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
 }, [theme]);

 const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 useEffect(() => {
  function handleClickOutside(event) {
   if (menuRef.current && !menuRef.current.contains(event.target)) {
    setIsMenuOpen(false);
   }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, []);

 const menuCompoMap = ([title, path], i) => (
  <NavLink
   to={path}
   key={i}
   className="hover:opacity-50 transition-all text-gray-800 dark:text-gray-400"
   onClick={() => {
    setIsMenuOpen(false);
   }}
  >
   <li>{title}</li>
  </NavLink>
 );
 const menuCompoMapMobile = ([title, path], i) => (
  <NavLink
   to={path}
   key={i}
   className="text-gray-800 dark:text-gray-400"
   onClick={() => setIsMenuOpen(false)}
  >
   <li>{title}</li>
  </NavLink>
 );

 return (
  <nav
   ref={menuRef}
   className="z-50 sticky top-0 left-0 bg-white/80 dark:bg-primary/80 p-2 lg:py-4 flex items-center justify-between border-b-1 border-gray-700/20 dark:border-gray-100/20 backdrop-blur"
  >
   <div className="flex items-center">
    <div className="lg:hidden flex items-center">
     <Button
      dark
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className="!p-2 !rounded-full"
     >
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
     </Button>
    </div>
    <Link to="/">
     <div className="flex items-center gap-1 sm:gap-3">
      <img src="/msc.png" alt="LOGO" className="w-14 h-14" />
      <h1 className="text-sm max-w-[150px] sm:max-w-none sm:text-xl font-medium hidden sm:block">
       MILLAT SCIENCE CLUB
      </h1>
     </div>
    </Link>
   </div>

   <ul className="hidden xl:flex gap-8">
    {[
     ["Home", "/"],
     ["About Us", "/about-us"],
    ].map(menuCompoMap)}

    <Submenu
     setIsMenuOpen={setIsMenuOpen}
     menuRef={menuRef}
     title="Panel"
     items={[
      ["Teachers", "/panel/teachers"],
      ["Executives", "/panel/executives"],
      ["Advisors", "/panel/advisors"],
      ["Founders", "/panel/founders"],
     ]}
    />

    {[["Achievements", "/achievements"]].map(menuCompoMap)}

    <Submenu
     setIsMenuOpen={setIsMenuOpen}
     menuRef={menuRef}
     title="Activities"
     items={[
      ["Events", "/activity/events"],
      ["Resources", "/activity/resources"],
     ]}
    />
   </ul>

   {isMenuOpen && (
    <ul className="lg:hidden absolute top-18 left-0 right-0 bg-white dark:bg-primary p-4 border-t-2 border-gray-700/20 dark:border-gray-100/20 flex flex-col gap-4 border-b-1">
     {[
      ["Home", "/"],
      ["About Us", "/about-us"],
     ].map(menuCompoMapMobile)}
     <Submenu
      mobile
      setIsMenuOpen={setIsMenuOpen}
      menuRef={menuRef}
      title="Panel"
      items={[
       ["Teachers", "/panel/teachers"],
       ["Executives", "/panel/executives"],
       ["Advisors", "/panel/advisors"],
       ["Founders", "/panel/founders"],
      ]}
     />
     {[["Achievements", "/achievements"]].map(menuCompoMapMobile)}
     <Submenu
      mobile
      setIsMenuOpen={setIsMenuOpen}
      menuRef={menuRef}
      title="Activities"
      items={[
       ["Events", "/activity/events"],
       ["Resources", "/activity/resources"],
      ]}
     />
    </ul>
   )}

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

    <Link to="/register">
     <Button>Register Now!</Button>
    </Link>
   </div>
  </nav>
 );
}

export default Navbar;
