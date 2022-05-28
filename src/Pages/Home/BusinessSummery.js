import React from "react";
import { FaTools } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { HiTrendingUp, HiOutlinePencilAlt } from "react-icons/hi";

const BusinessSummery = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-3">Business Summery</h2>
      <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-x-1 rounded-xl shadow text-white">
        <div className="stat flex flex-col bg-secondary rounded-xl md:rounded-r-none lg:rounded-l-xl lg:rounded-none ">
          <div className="stat-figure text-primary">
            <TiGroupOutline className="h-10 w-10" />
          </div>
          <div>
            <div className="stat-value text-primary">
              7.5K<small>+</small>
            </div>
            <div className="stat-title text-xl font-semibold">Customers</div>
            <div className="stat-desc">32% more than last month</div>
          </div>
        </div>
        <div className="stat glass hover:bg-secondary flex flex-col bg-secondary rounded-xl md:rounded-l-none lg:rounded-none">
          <div className="stat-figure text-white">
            <HiTrendingUp className="h-10 w-10" />
          </div>
          <div>
            <div className="stat-value text-white">3.7M</div>
            <div className="stat-title text-xl font-semibold mt-1">
              Annual Revenues
            </div>
            <div className="stat-desc">18% more than last month</div>
          </div>
        </div>
        <div className="stat flex flex-col bg-secondary rounded-xl md:rounded-r-none lg:rounded-none ">
          <div className="stat-figure text-primary">
            <HiOutlinePencilAlt className="h-10 w-10" />
          </div>
          <div>
            <div className="stat-value text-primary">6.3K</div>
            <div className="stat-title text-xl font-semibold mt-1">
              Total Reviews
            </div>
            <div className="stat-desc text-white">
              28 Shipment remaining worldwide
            </div>
          </div>
        </div>
        <div className="stat glass hover:bg-secondary flex flex-col bg-secondary rounded-xl md:rounded-l-none lg:rounded-r-xl  lg:rounded-none">
          <div className="stat-figure text-white">
            <FaTools className="h-10 w-10" />
          </div>
          <div>
            <div className="stat-value">387</div>
            <div className="stat-title text-xl font-semibold mt-1">
              Total Tools
            </div>
            <div className="stat-desc text-white">
              57 New Launching This Month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
