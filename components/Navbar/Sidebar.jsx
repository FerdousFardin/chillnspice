import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImCross } from "react-icons/im";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Sidebar({
  open,
  menuItems,
  normalStyles,
  activeStyles,
  setOpen,
  width,
}) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        {open && width < 1024 && (
          <motion.aside
            className="z-20 absolute left-0 top-0 bg-[#bce1ff]/90 backdrop-blur-3xl shadow-md w-full h-screen"
            initial={{ width: 0 }}
            animate={{
              width: 250,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.01, direction: "revert-layer" }}
              className="my-5 flex justify-end px-5"
            >
              <ImCross
                onClick={() => setOpen(!open)}
                className="cursor-pointer w-5 h-5"
              />
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {menuItems.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  whileHover={{ translateX: 1.25 }}
                  variants={itemVariants}
                >
                  {" "}
                  <Link
                    onClick={() => setOpen(false)}
                    className={
                      router.pathname === to ? activeStyles : normalStyles
                    }
                    href={to}
                  >
                    {name}
                  </Link>
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
