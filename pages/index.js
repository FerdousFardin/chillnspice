import ServicesHome from "@/components/ServicesHome/ServicesHome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../public/assets/hero-img.png";
export default function Home() {
  return (
    <>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center mt-10">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-6xl">
              Lorem ipsum dolor sit amet
            </h1>
          </div>

          <div className="w-full mt-10 bg-transparent text-center lg:text-left">
            <Link
              className="px-10 py-6 bg-primary rounded text-white text-lg mr-5 font-semibold"
              href={"/services"}
            >
              See Services
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center w-full lg:h-96 lg:w-1/2">
          <Image
            width={"100%"}
            className="object-cover mx-auto rounded-md lg:max-w-2xl"
            src={heroImg}
            alt="glasses photo"
          />
        </div>
      </div>
      {/* <!-- ====== Services Section Start --> */}
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
        <ServicesHome />
      </section>
      {/* <!-- ====== Services Section End --> */}
    </>
  );
}
