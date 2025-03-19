import { Link, NavLink } from "react-router";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav className="_nav z-50 sticky top-0 left-0 bg-primary w-full p-4 flex items-center justify-between border-b-1 border-gray-100/20">
        <div className="flex items-center gap-3">
          <img src="/msc.png" alt="LOGO" className="w-14 h-14" />
          <h1 className="text-xl font-medium">MILLAT SCIENCE CLUB</h1>
        </div>
        <ul className="flex gap-8">
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
          <Link to="/register">
            <Button>Register Now!</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
