"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar.jsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowSize from "@/utility/useWindowSize";

function Navbar() {
  let [width] = useWindowSize();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact Us", to: "/contact" },
  ];
  const activeStyles =
    "flex rounded-sm cursor-pointer transition-colors duration-300 font-bold text-white px-4 py-2 bg-grayish-blue uppercase";
  const normalStyles =
    "flex gap-2 px-4 py-2 hover:text-secondary cursor-pointer transition-colors duration-300 uppercase items-center text-sm font-bold hover:text-white hover:bg-primary rounded-sm tracking-wide";
  return (
    <>
      <div className="flex flex-col mb-20">
        <nav className="flex flex-row-reverse lg:flex-row justify-around py-4 bg-white/80 backdrop-blur-xl shadow-md w-full fixed top-0 left-0 right-0 z-10">
          <div className="flex items-center">
            {/* <!-- Logo --> */}
            <Link href="/" className="cursor-pointer ">
              <h3 className="text-2xl font-medium flex gap-2 items-center">
                <span className="text-primary">SRN</span>
                Innovations
                <Image
                  width={"100%"}
                  className="object-cover"
                  src={logo}
                  alt="Store Logo"
                />
              </h3>
            </Link>
          </div>

          {/* <!-- Links Section --> */}
          <div className="items-center hidden space-x-8 lg:flex">
            {menuItems.map((menu, idx) => (
              <Link
                key={idx}
                className={
                  router.pathname === menu.to ? activeStyles : normalStyles
                }
                href={menu.to}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          {/* Sidebar section */}
          <button className="lg:hidden absolute left-5 -translate-y-full top-2/3">
            <GiHamburgerMenu
              className="text-3xl "
              onClick={() => setOpen(!open)}
            />
          </button>
          <Sidebar
            {...{ menuItems, open, setOpen, activeStyles, normalStyles, width }}
          />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
