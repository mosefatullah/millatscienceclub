import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { ChevronDown } from "lucide-react";

function Submenu({ mobile, setIsMenuOpen, title, items, menuRef }) {
 const [isOpen, setIsOpen] = useState(false);
 useEffect(() => {
  function handleClickOutside(event) {
   if (menuRef.current && !menuRef.current.contains(event.target)) {
    setIsOpen(false);
   }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [menuRef]);
 return (
  <>
   {mobile ? (
    <div>
     <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center gap-1 text-gray-800 dark:text-gray-400 cursor-pointer hover:opacity-50 transition-all"
     >
      {title} <ChevronDown className="w-4 h-4" />
     </button>
     {isOpen && (
      <ul className="mt-2 pl-4">
       {Array.isArray(items) &&
        items.map(([t, path], i) => (
         <NavLink
          to={path}
          key={i}
          className="block py-2 text-gray-800 dark:text-gray-400"
          onClick={() => {
           setIsOpen(false);
           if (typeof setIsMenuOpen === "function") setIsMenuOpen(false);
          }}
         >
          {t}
         </NavLink>
        ))}
      </ul>
     )}
    </div>
   ) : (
    <div className="relative">
     <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center gap-1 hover:opacity-50 transition-all text-gray-800 dark:text-gray-400 cursor-pointer"
     >
      {title} <ChevronDown className="w-4 h-4" />
     </button>
     {isOpen && (
      <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 rounded-md">
       {Array.isArray(items) &&
        items.map(([t, path], i) => (
         <NavLink
          to={path}
          key={i}
          className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
         >
          {t}
         </NavLink>
        ))}
      </ul>
     )}
    </div>
   )}
  </>
 );
}

export default Submenu;
