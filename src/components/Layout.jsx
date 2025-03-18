import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-primary text-white transition-all">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
