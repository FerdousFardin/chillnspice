import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import PageWrapper from "./PageWrapper/PagerWrapper";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-[#bce1ff] via-gray-100 to-[#bce1ff]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
