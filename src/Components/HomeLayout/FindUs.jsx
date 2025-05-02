import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
      <div className="join join-vertical justify-start w-full">
        <button className="bg-base-100 justify-start btn join-item">
          <FaFacebookF className="mr-3" />
          Facebook
        </button>
        <button className="bg-base-100 justify-start btn join-item">
            <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </button>
        <button className="bg-base-100 justify-start btn join-item">
            <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
