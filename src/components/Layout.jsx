import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);
  return (
    <main className="dark:bg-primary dark:text-white">
      <Navbar />
      <div className="w-full min-h-[60vh]" role="main">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
