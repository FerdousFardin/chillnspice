import { BsFillPieChartFill } from "react-icons/bs";
import ServicesCard from "./ServicesCard";
function ServicesHome() {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Services
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              What We Offer
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {[...Array(6)].map((e, idx) => (
          <ServicesCard key={idx} id={idx} />
        ))}
      </div>
    </div>
  );
}

export default ServicesHome;
