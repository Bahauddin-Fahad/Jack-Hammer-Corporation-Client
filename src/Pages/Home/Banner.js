import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img
            src="https://i.ibb.co/5Y0HGjz/banner1.jpg"
            alt=""
            class="w-full"
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            src="https://i.ibb.co/yddCTZr/banner2.jpg"
            alt=""
            class="w-full"
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            src="https://i.ibb.co/Mkvb60M/banner3.jpg"
            alt=""
            class="w-full"
          />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img
            src="https://i.ibb.co/bvjGm3X/banner4.jpg"
            alt=""
            class="w-full"
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-sm btn-primary ">
          1
        </a>
        <a href="#item2" class="btn btn-sm btn-primary ">
          2
        </a>
        <a href="#item3" class="btn btn-sm btn-primary font-semibold">
          3
        </a>
        <a href="#item4" class="btn btn-sm btn-primary ">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
