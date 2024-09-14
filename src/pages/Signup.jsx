import React from 'react'

function Signup() {
    return (
        <div class="bg-gradient-to-b from-yellow-100 to-white flex items-center justify-center min-h-screen">
            <div class="w-full max-w-xs md:max-w-md lg:max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold text-left">Grow Smarter<br/>Farm Better</h1>

                <form class="mt-6">
                    <div class="mb-4">
                        <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-yellow-500" type="email" placeholder="Email"/>
                    </div>
                    <div class="mb-4">
                        <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-yellow-500" type="password" placeholder="Password"/>
                    </div>
                    {/* <!-- Dropdown for role selection --> */}
                    <div class="mb-4">
                        <select class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-yellow-500">
                            <option value="consumer">Consumer</option>
                            <option value="farmer">Farmer</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p class="mt-4 text-center text-gray-600">Do you have an existing account? <a href="#" class="text-black font-bold hover:underline">Login</a></p>
            </div>
        </div>
    )
}

export default Signup
