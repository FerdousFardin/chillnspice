import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

function Navbar() {
  //   const activeStyles =
  //     "flex  cursor-pointer transition-colors duration-300 font-bold text-blue-600 uppercase";
  const normalStyles =
    "flex gap-2 px-4 py-2 text-primary hover:text-secondary cursor-pointer transition-colors duration-300 uppercase items-center text-sm font-bold hover:text-white hover:bg-[#398799] rounded-sm tracking-wide";
  return (
    <div className="flex flex-col mb-20">
      <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-xl shadow-md w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          {/* <!-- Logo --> */}
          <Link href="/" className="cursor-pointer ">
            <h3 className="text-2xl font-medium flex gap-2 items-center">
              <span className="text-blue-500">Chill</span>
              n Spice
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
          <Link className={normalStyles} href="/">
            Home
          </Link>
          <Link className={normalStyles} href="/about">
            About
          </Link>
          <Link className={normalStyles} href="/services">
            Services
          </Link>
          <Link className={normalStyles} href="/contact">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          {/* <!-- Register --> */}
          <Link href="/signup" className={normalStyles}>
            <AiOutlineUserAdd className="w-5 h-5" />
            Register
          </Link>

          {/* <!-- Login --> */}
          <Link href={"/login"} className={normalStyles}>
            <FiLogIn className="h-5 w-5" />
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
