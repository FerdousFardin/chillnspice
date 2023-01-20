import Image from "next/image";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../../public/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-[#bce1ff] via-gray-100 to-[#bce1ff] border-t border-grayish-blue">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image
              src={logo}
              width={"100%"}
              className="mr-5 h-6 sm:h-9"
              alt="logo"
            />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <BsFacebook className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <BsInstagram className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <BsTwitter className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>

                <BsGithub className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Dribbble </span>
                <BsDribbble className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href>
                  {" "}
                  About{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href>
                  {" "}
                  1on1 Coaching{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Company Review{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Accounts Review{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  HR Consulting{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  SEO Optimisation{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href>
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href>
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Terms &amp; Conditions{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          © {currentYear} SRN Innovations
        </p>
      </div>
    </footer>
  );
}
