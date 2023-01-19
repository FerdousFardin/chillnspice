import Link from "next/link";
import React from "react";
import { BsFillPieChartFill } from "react-icons/bs";

export default function ServicesCard({ id }) {
  return (
    <div className="w-full px-4">
      <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-grayish rounded-2xl mb-8">
          <BsFillPieChartFill className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-semibold text-xl text-dark mb-3">
          Refreshing Design
        </h4>
        <p className="text-body-color mb-5">
          We enjoy working with discerning clients, people for whom qualifty,
          service, integrity & aesthetics.
        </p>
        <Link
          className="px-3 py-2 bg-primary rounded text-white"
          href={`/services/${id}`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
