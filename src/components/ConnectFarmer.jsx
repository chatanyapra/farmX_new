import React from 'react'
import { FaCircleCheck,FaPhoneFlip, FaCommentDots, FaShareNodes, FaFacebookF, FaSquareTwitter, FaInstagram, FaLinkedin   } from "react-icons/fa6";

function ConnectFarmer() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* <!-- Profile Header --> */}
        <div className="relative">
            <img src="//picsum.photos/1920/1080" alt="Farmer Image" className="w-full h-48 md:h-64 lg:h-80 object-cover"/>
            <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white p-4">
                <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">Shreemati Sita Devi</h1>
                <p className="text-sm md:text-base">Wheat Type</p>
            </div>
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full">
                {/* <i className="fas fa-check-circle"></i> */}
                <FaCircleCheck/>
            </div>
        </div>

        {/* <!-- Experience and Info --> */}
        <div className="p-4 md:p-6">
            <p className="text-gray-700 text-sm md:text-base">Experience: 12 Years</p>
            <p className="text-gray-700 text-sm md:text-base">Practices in: Wheat, Carrot, Ladyfinger</p>
            <p className="text-gray-700 text-sm md:text-base">Satisfied Customers: 342</p>
            <div className="flex items-center space-x-1 mt-2">
                <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="flex justify-around items-center mt-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 flex">
                    <FaPhoneFlip className='mr-2'/> Call
                </button>
                <button className="bg-gray-200 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-300 flex">
                    <FaCommentDots className='mr-2'/> AI
                </button>
                <button className="bg-gray-200 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-300 flex">
                    <FaShareNodes className='mr-2'/> Share
                </button>
            </div>

            {/* <!-- Photos Section --> */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Photos</h3>
                <div className="grid grid-cols-3 gap-2">
                    <img src="//picsum.photos/1920/1080" alt="Photo 1" className="w-full h-20 md:h-24 lg:h-32 object-cover rounded"/>
                    <img src="//picsum.photos/1920/1080" alt="Photo 2" className="w-full h-20 md:h-24 lg:h-32 object-cover rounded"/>
                    <img src="//picsum.photos/1920/1080" alt="Photo 3" className="w-full h-20 md:h-24 lg:h-32 object-cover rounded"/>
                </div>
            </div>

            {/* <!-- Details Section --> */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <p className="text-gray-600">Harvest Quantity</p>
                <div className="flex space-x-2 mt-2">
                    <span className="bg-yellow-200 text-yellow-700 py-1 px-2 rounded">👍</span>
                    <span className="bg-yellow-200 text-yellow-700 py-1 px-2 rounded">👍</span>
                    <span className="bg-yellow-200 text-yellow-700 py-1 px-2 rounded">👍</span>
                    <span className="bg-yellow-200 text-yellow-700 py-1 px-2 rounded">👍</span>
                    <span className="bg-yellow-200 text-yellow-700 py-1 px-2 rounded">👍</span>
                </div>
            </div>

            {/* <!-- Price Section --> */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Price per Bushel</h3>
                <p className="text-gray-700">Rs 2000/Kg</p>
                <p className="text-green-600">Discount: 10%</p>
                <div className="flex justify-between items-center mt-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
                        Connect
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* <!-- Social Media Links --> */}
            <div className="mt-6 flex justify-around">
                <FaFacebookF  className="text-xl text-blue-500"></FaFacebookF>
                <FaSquareTwitter  className="text-xl text-blue-400"></FaSquareTwitter>
                <FaInstagram  className="text-xl text-pink-500"></FaInstagram>
                <FaLinkedin  className=" text-xl text-blue-700"></FaLinkedin>
            </div>

            {/* <!-- Reviews Section --> */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <h4 className="text-sm md:text-base font-semibold">Remu Kaki Sa - Wheat Producer</h4>
                    <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas dolorum labore autem harum architecto recusandae mollitia doloremque perspiciatis!</p>
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <h4 className="text-sm md:text-base font-semibold">Remu Kaki Sa - Wheat Producer</h4>
                    <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas dolorum labore autem harum architecto recusandae mollitia doloremque perspiciatis!</p>
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConnectFarmer
