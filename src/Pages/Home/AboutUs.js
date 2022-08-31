import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-4">
        Jack Hammer Power Tools
      </h2>
      <div className="hero  bg-secondary hover:bg-secondary text-primary">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div data-aos="fade-right" className="py-6">
            <h1 className="text-4xl font-bold uppercase">
              Jack Hammer Corporation
            </h1>
            <p className="py-4 text-white w-9/12 mx-auto">
              Our premium Jack Hammer Corp. Tool includes a selection of our
              highest quality and best performing tools and equipment, giving a
              significant advantage over the job. Whether on the belt, in the
              hand, or on the jobsite, choose STANLEY FATMAX to be sure you're
              equipped with the very best of our best.
            </p>
            <button
              onClick={() => navigate("/orderTools")}
              className="btn btn-glass text-primary font-bold ring-1 ring-primary"
            >
              Order Now
            </button>
          </div>
          <div data-aos="fade-left" className="mx-auto rounded-lg mb-5 lg:mb-0">
            <img
              src="https://i.ibb.co/1TYDDMb/aboutImg.jpg"
              className="max-w-md rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
