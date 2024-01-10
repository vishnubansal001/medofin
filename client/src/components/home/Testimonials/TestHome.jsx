import React from "react";
import Testimonials from "../Testimonials/Testimonials";

const TestHome = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="xl:w-[470px]  mx-auto">
          <h2 className=" text-4xl font-bold text-center">
            What are Customers say
          </h2>
          <p className="text-center mt-4">
            World-class care for everyone. Our health system offeres unmatched,
            expert health care.
          </p>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};

export default TestHome;
