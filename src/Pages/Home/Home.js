import React from "react";
import Reviews from "../Reviews/Reviews";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="mb-10 space-y-10">
      <Banner />
      <AboutUs />
      <Tools />
      <ChooseUs />
      <BusinessSummery />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
