import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => (
  <div className="pb-16">
    <Marquee className="my-8">
      <div className="px-20">
        <img
          src="./svgs/partner2.jpg"
          width={400}
          height={400}
          alt="partner2"
        ></img>
      </div>
      <div className="px-20">
        <img src="./svgs/abc.jpg" width={400} height={400} alt="partner2"></img>
      </div>
      <div className="px-20">
        <img
          src="./svgs/partner3.jpg"
          width={400}
          height={400}
          alt="partner2"
        ></img>
      </div>
      <div className="px-20">
        <img src="./svgs/abc.jpg" width={400} height={400} alt="partner2"></img>
      </div>
    </Marquee>
  </div>
);

export default Partners;
