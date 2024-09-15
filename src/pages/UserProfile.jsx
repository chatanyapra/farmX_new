import React from 'react'

function UserProfile() {
  return (
    <div>
      <div className="relative w-11/12 md:flex md:justify-evenly m-auto p-6 bg-black text-white rounded-lg shadow-lg">
        <span className="text-2xl font-bold text-left mb-6 absolute left-10 top-10">User Profile</span>
        <div className="flex md:flex-col justify-center mb-4 pt-10">
            <img className="w-48 h-48 rounded-full shadow-lg" src="//picsum.photos/1920/1080" alt="User Image"/>
            <div className="flex flex-col mt-5 ml-4 font-semibold text-center">
                <h5>Rajeev Kumar</h5>
                <h5 className="text-blue-500">+91 5455455455</h5>
            </div>
        </div>
        <form>
            <div className="mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 text-gray-500 border rounded-lg focus:outline-none focus:border-yellow-500" type="email" id="email" placeholder="Email"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input className="w-full px-3 py-2 text-gray-500 border rounded-lg focus:outline-none focus:border-yellow-500" type="tel" id="phone" placeholder="Phone Number"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="address">Address</label>
                <input className="w-full px-3 py-2 text-gray-500 border rounded-lg focus:outline-none focus:border-yellow-500" type="text" id="address" placeholder="Address"/>
            </div>
            <div className="flex items-center justify-center">
                <button className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:shadow-outline" type="button">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default UserProfile
