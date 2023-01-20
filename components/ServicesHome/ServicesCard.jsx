import Link from "next/link";
import React from "react";
import { BsFillPieChartFill } from "react-icons/bs";

export default function ServicesCard({ info }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-grayish-blue rounded-2xl mb-8">
          <BsFillPieChartFill className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-semibold text-xl text-dark mb-3">{info.title}</h4>
        <p className="text-body-color mb-5">{info.description}</p>
        <Link
          className="px-3 py-2 bg-primary rounded text-white"
          href={`/services/${info.id}`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
