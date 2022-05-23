import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="mb-10">
      <Banner />
      <Tools />
      <BusinessSummery />
    </div>
  );
};

export default Home;
