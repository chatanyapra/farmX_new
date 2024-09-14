import React from "react";
import { FaSquareFacebook, FaSquareTwitter, FaSquareInstagram, FaBackwardStep } from "react-icons/fa6"; 
import { Link } from "react-router-dom";

const UserConnect = () => {
  return (
    <div className="container relative mx-auto p-6 bg-white rounded-lg shadow-md">
        <Link to={"/"} className="absolute top-1 left-1 hover:text-blue-700 border-solid border-2 border-red-950 hover:border-red-600 rounded-md p-1 flex font-bold cursor-pointer">
            <FaBackwardStep className="text-blue-500 text-xl my-0.5"/>
            Back
        </Link>
      <div className="flex flex-col lg:flex-row items-center justify-between ml-10">
        <div className="lg:flex items-center space-x-4">
          <img
            src="https://picsum.photos/1920/1080"
            alt="Profile"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
          />
          <div className="mt-4 lg:mt-0 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-gray-800">Shreemati Sita Devi</h1>
            <p className="text-gray-500">Wheat Type</p>
            <p className="mt-2 text-gray-600">Experience: 12 Years</p>
            <p className="text-gray-600">Practices in: Wheat, Carrot, Ladyfinger</p>
            <p className="text-gray-600">Satisfied Customers: 342</p>
            <div className="flex mt-2 justify-center lg:justify-start">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-4 lg:mt-0 flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Connect
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>

      {/* Photos Section */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-800">Photos</h2>
        <div className="flex space-x-4 mt-4">
          <img
            src="https://picsum.photos/200"
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-lg object-cover"
            alt="Crop Photo 1"
          />
          <img
            src="https://picsum.photos/201"
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-lg object-cover"
            alt="Crop Photo 2"
          />
          <img
            src="https://picsum.photos/202"
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-lg object-cover"
            alt="Crop Photo 3"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-8 grid lg:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-gray-800">Details</h3>
          <p className="text-gray-600 mt-2">
            Harvest Quantity: <span className="text-yellow-500">★★★★</span>
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-gray-800">Price per Bushel</h3>
          <p className="text-gray-600 mt-2">Rs 2000/Kg</p>
          <p className="text-gray-600 mt-2">Discount: 10%</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800">Social Media Links</h3>
        <div className="flex space-x-4 mt-4">
          <FaSquareFacebook className="text-blue-500 hover:text-blue-700 text-2xl" />
          <FaSquareTwitter className="text-blue-400 hover:text-blue-600 text-2xl" />
          <FaSquareInstagram className="text-purple-500 hover:text-purple-700 text-2xl" />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800">Reviews</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
          <p className="text-gray-600 font-semibold">Ramu Kakaji</p>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula urna non justo bibendum.
          </p>
          <span className="text-yellow-500">★★★★★</span>
        </div>
      </div>
    </div>
  );
};

export default UserConnect;
