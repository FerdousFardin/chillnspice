import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const menuItems = [
    { menuName: "Home", path: "/" },
    { menuName: "About", path: "/about" },
    { menuName: "Services", path: "/services" },
    { menuName: "Contact Us", path: "/contact" },
  ];
  const activeStyles =
    "flex rounded-sm cursor-pointer transition-colors duration-300 font-bold text-white px-4 py-2 bg-grayish uppercase";
  const normalStyles =
    "flex gap-2 px-4 py-2 hover:text-secondary cursor-pointer transition-colors duration-300 uppercase items-center text-sm font-bold hover:text-white hover:bg-primary rounded-sm tracking-wide";
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
          {menuItems.map((menu, idx) => (
            <Link
              key={idx}
              className={
                router.pathname === menu.path ? activeStyles : normalStyles
              }
              href={menu.path}
            >
              {menu.menuName}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          {/* <!-- Register --> */}
          <Link
            href="/signup"
            className={
              router.pathname === "/signup" ? activeStyles : normalStyles
            }
          >
            <AiOutlineUserAdd className="w-5 h-5" />
            Register
          </Link>

          {/* <!-- Login --> */}
          <Link
            href={"/login"}
            className={
              router.pathname === "/login" ? activeStyles : normalStyles
            }
          >
            <FiLogIn className="h-5 w-5" />
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
