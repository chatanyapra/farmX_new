import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Weather code map for easier interpretation
const weatherCodeMap = {
    "0": "Unknown",
    "1000": "Clear, Sunny",
    "1100": "Mostly Clear",
    "1101": "Partly Cloudy",
    "1102": "Mostly Cloudy",
    "1001": "Cloudy",
    "2000": "Fog",
    "2100": "Light Fog",
    "4000": "Drizzle",
    "4001": "Rain",
    "4200": "Light Rain",
    "4201": "Heavy Rain",
    "5000": "Snow",
    "5001": "Flurries",
    "5100": "Light Snow",
    "5101": "Heavy Snow",
    "6000": "Freezing Drizzle",
    "6001": "Freezing Rain",
    "6200": "Light Freezing Rain",
    "6201": "Heavy Freezing Rain",
    "7000": "Ice Pellets",
    "7101": "Heavy Ice Pellets",
    "7102": "Light Ice Pellets",
    "8000": "Thunderstorm"
};

const TomorrowWeather = () => {
    const [city, setCity] = useState('New York');
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = '5sc5z9mz5EINJPbJ60KBGgJacCmvXVA1';

    const fetchWeather = useCallback(async (cityName) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://api.tomorrow.io/v4/timelines?location=${cityName}&fields=temperature,weatherCode&units=metric&timesteps=1d&apikey=${API_KEY}`
            );
            setForecast(response.data.data.timelines[0].intervals);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [API_KEY]);

    useEffect(() => {
        const debounceFetch = setTimeout(() => {
            if (city) fetchWeather(city);
        }, 500);

        return () => clearTimeout(debounceFetch);
    }, [city, fetchWeather]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        // <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-60 text-white p-6">
        <div className="w-11/12 mx-auto text-white">
            {/* <div className="flex flex-col items-center">
                    <input
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Enter city"
                        className="p-3 w-full md:w-1/2 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
                    />
                </div>
                {loading && (
                    <div className="flex justify-center">
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    </div>
                )}
                {error && (
                    <p className="text-center text-red-500 mb-4">
                        Error: {error}
                    </p>
                )} */}
            {forecast && forecast.length > 0 && (
                <div className="flex md:flex-col">
                    {/* Left Panel: Current Weather */}
                    <div className="flex justify-around bg-black bg-opacity-75 p-6 rounded-t-2xl shadow-md">
                        <div className="text-center mb-2">
                            <h1 className="text-5xl font-bold">{forecast[0].values.temperature}°C</h1>
                            <p className="text-xl mt-2">{weatherCodeMap[forecast[0].values.weatherCode]}</p>
                            <p className="text-sm mt-1">{city}</p>
                        </div>
                        <div>
                            <div className="flex justify-around mt-2">
                                <div className='w-28 h-28 border-2 border-dashed border-gray-500 p-4 rounded-2xl text-center pt-7'>
                                    <p className="text-sm">Feels Like</p>
                                    <p className="text-xl">{forecast[0].values.temperature + 2}°C</p>
                                </div>
                                {/* <div className='w-28 h-28 ml-5 border-2 border-dashed border-gray-500 p-4 rounded-2xl'>
                                    <p className="text-sm">Precipitation</p>
                                    <p className="text-xl">2.3"</p>
                                </div> */}
                            </div>
                            {/* <div className="flex justify-around mt-6">
                                <div className='w-28 h-28 border-2 border-dashed border-gray-500 p-4 rounded-2xl'>
                                    <p className="text-sm">Visibility</p>
                                    <p className="text-xl">6 mi</p>
                                </div>
                                <div className='w-28 h-28 ml-5 border-2 border-dashed border-gray-500 p-4 rounded-2xl'>
                                    <p className="text-sm">Humidity</p>
                                    <p className="text-xl">82%</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Panel: 10-Day Forecast */}
                    <div className="bg-black bg-opacity-75 py-3 px-4 rounded-b-2xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">5-Day Forecast</h2>
                        <div className="grid grid-cols-5 gap-4">
                            {forecast.slice(0, 5).map((day, index) => (
                                <div key={index} className=" text-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out">
                                    <p className="text-sm">{new Date(day.startTime).toLocaleDateString('en-GB')}</p>
                                    <p className="text-xl font-semibold">{day.values.temperature}°C</p>
                                    <p className="text-sm">{weatherCodeMap[day.values.weatherCode]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* </div> */}
        </div>
    );
};

export default TomorrowWeather;
