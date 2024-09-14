import React from "react";
import { Link } from 'react-router-dom';
import farmer from '../assets/images/farmer.jpg'
import wheat from '../assets/images/wheat.jpg'

function Cropcard() {
  return (

    <div className="relative flex justify-evenly bg-black rounded-2xl p-4 my-2 space-x-4 w-92 h-44 border border-solid text-white">
      {/* Image and Crop Details */}
      <div className="flex flex-col w-2/4 pb-1">
        <img
          src={wheat}
          alt="Wheat"
          className="w-full h-24 object-cover rounded-2xl"
        />
        <span className="text-sm pt-1">(Fresh) Wheat</span>
        <span className="text-xs text-green-200 pt-1">Available</span>
      </div>

      {/* Farmer Information */}
      <div className="w-3/6 flex">
        <div className="flex flex-col mr-2">
          <img
            src={farmer}
            alt="Farmer"
            className="w-7 h-7 object-cover rounded-full"
          />
          <i
            className="fa fa-send-o py-2.5 px-2"
            style={{ fontSize: "10px" }}
          ></i>
        </div>
        <div className="flex flex-col">
          <span className="flex">
            <span className="text-lg font-semibold w-full truncate">
              Dinesh Mishra
            </span>
          </span>
          <span className="w-full truncate text-xs py-2">
            <span>Free Mandi, Mathura</span>
          </span>
          <small className="text-gray-500" style={{ fontSize: "12px" }}>
            1 Km from you
          </small>
        </div>
      </div>

      {/* Connect Button */}
      <div className="absolute right-2 bottom-3">
        <Link to="/connect">
          <Link to={"/userconnect"} className="text-sm px-8 py-1.5 rounded-xl bg-yellow-900">
            Connect
          </Link>
        </Link>
      </div>
    </div>
  );
}

export default Cropcard;
