import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3">
      <p className="font-medium text-xl text-base-100 bg-secondary py-2 px-3">
        Latest
      </p>

      <Marquee className="flex gap-3" pauseOnHover={true} speed={150}>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
          cupiditate, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Alias, cupiditate!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
