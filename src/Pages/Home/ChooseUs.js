import React from "react";

const ChooseUs = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-4">
        Why Choose Jack Hammer Corp.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="text-white h-64 glass bg-secondary hover:bg-secondary rounded-lg flex flex-col justify-evenly p-3 shadow-lg ring-2 ring-primary"
        >
          <div className="text-center font-bold uppercase text-4xl">
            CUSTOM QUOTES
          </div>
          <p className="text-center text-2xl">
            Technical Advice & Tailored Solutions for Your Company.
          </p>
          <button className="btn btn-primary w-3/5 rounded font-bold mx-auto">
            Request a quote
          </button>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1500"
          className="text-white h-72 glass bg-secondary hover:bg-secondary rounded-lg flex flex-col justify-evenly p-3 shadow-lg ring-2 ring-primary"
        >
          <div className="text-center font-bold uppercase text-4xl">
            WORLDWIDE SHIPPING
          </div>
          <p className="text-center text-2xl">
            We ship Everything Everywhere. Best International Couriers.
          </p>
          <button className="btn btn-primary w-3/5 rounded font-bold mx-auto">
            Select Your Country
          </button>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          className="text-white h-64 glass bg-secondary hover:bg-secondary rounded-lg flex flex-col justify-evenly p-3 shadow-lg ring-2 ring-primary"
        >
          <div className="text-center font-bold uppercase text-4xl">
            CUSTOMER SERVICE
          </div>
          <p className="text-center text-2xl">
            Got a question about orders, products, delivery or returns?
          </p>
          <button className="btn btn-primary w-3/5 rounded font-bold mx-auto">
            help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
