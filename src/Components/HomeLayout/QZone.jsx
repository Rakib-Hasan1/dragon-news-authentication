import React from "react";
import QLogo from "../../assets/swimming.png";
import QClass from "../../assets/class.png";
import QplayGround from "../../assets/playground.png";
import bg from "../../assets/bg.png";

const QZone = () => {
  return (
    <>
      <div className="bg-base-300 p-3 rounded-sm">
        <h2 className="font-semibold text-xl mb-5">Q-Zone</h2>
        <div className="flex flex-col gap-4">
          <img className="w-full" src={QLogo} alt="" />
          <img className="w-full" src={QClass} alt="" />
          <img className="w-full" src={QplayGround} alt="" />
        </div>
      </div>

      <div>
        <img className="w-full" src={bg} alt="" />
      </div>
    </>
  );
};

export default QZone;
