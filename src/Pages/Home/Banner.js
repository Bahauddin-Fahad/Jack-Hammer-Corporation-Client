import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/6D41QHz/banner1.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/L8VzPWq/banner2.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/YN5bW2d/banner3.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/P4dxSJr/banner4.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 bg-secondary">
        <a href="#item1" className="btn btn-sm btn-primary ">
          1
        </a>
        <a href="#item2" className="btn btn-sm btn-primary ">
          2
        </a>
        <a href="#item3" className="btn btn-sm btn-primary font-semibold">
          3
        </a>
        <a href="#item4" className="btn btn-sm btn-primary ">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
