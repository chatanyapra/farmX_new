import React, { useState } from 'react';

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']; // Example cities
const crops = ['Wheat', 'Corn', 'Soybean', 'Rice', 'Barley']; // Example crops

function FarmerLocationFilter() {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleCropChange = (event) => {
        setSelectedCrop(event.target.value);
    };

    const handleSearch = () => {
        // Handle the search functionality here
        console.log(`Searching for ${selectedCrop} in ${selectedCity}`);
        // Example API call or search logic can be added here
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4">Filter Farmer Locations</h2>
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                    Select City
                </label>
                <select
                    id="city"
                    value={selectedCity}
                    onChange={handleCityChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                >
                    <option value="">--Select City--</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="crop" className="block text-gray-700 text-sm font-bold mb-2">
                    Select Crop
                </label>
                <select
                    id="crop"
                    value={selectedCrop}
                    onChange={handleCropChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                >
                    <option value="">--Select Crop--</option>
                    {crops.map((crop) => (
                        <option key={crop} value={crop}>
                            {crop}
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            >
                Search
            </button>
        </div>
    );
}

export default FarmerLocationFilter;
