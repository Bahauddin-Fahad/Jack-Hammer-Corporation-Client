import React from "react";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="mb-10">
      <Banner />
      <Tools />
      <BusinessSummery />
      <Reviews />
    </div>
  );
};

export default Home;
