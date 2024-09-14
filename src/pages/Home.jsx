import React, { useState } from 'react';
import GetToKnow from '../components/GetToKnow';
import { useButtonContext } from '../context/HealthAiContext';
import { Link } from 'react-router-dom';
import farmer from '../assets/images/farmer.jpg'
const Home = () => {
    const { isOpen, setIsOpen } = useButtonContext();
    return (
        <div>
            <div className="absolute w-full h-full bg-green-500 -z-10 background-gradient"></div>
            <div className="h-screen flex flex-col p-4 text-white" style={{ width: '269px' }}>
                <div className="w-full rounded-2xl bg-black flex flex-col pb-3">
                    <div className="w-full pt-3 px-3 flex">
                        <img src={farmer} alt="Wheat" className="w-12 h-12 object-cover rounded-2xl" />
                        <span className="pl-2 flex flex-col">
                            <span>
                                <h5>
                                    <b>Hello,</b> Martin
                                </h5>
                            </span>
                            <span className="flex">
                                <i className="fa fa-send-o pt-1 pr-1" style={{ fontSize: '8px' }}></i>
                                <div style={{ fontSize: '10px' }} className="h-8 overflow-hidden">
                                    Krishna Nagar, Mathura
                                </div>
                            </span>
                        </span>
                    </div>
                    <div className="w-full px-3">
                        <p className="leading-tight text-xs">
                            lorem40 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempore?
                        </p>
                    </div>
                </div>
                <div className="mt-3 w-full h-auto rounded-2xl flex flex-col py-2 pl-1 overflow-hidden bg-black" >
                    <div className="overflow-y-scroll scrollbar-style">
                        <div className="w-full pt-2 px-2 flex" >
                            <div className="border-2 border-red-800 border-solid w-full flex flex-col rounded-2xl" style={{ backgroundColor: "#4CAF50" }}>
                                <div className="flex flex-col my-2 mx-4">
                                    <i className='fa fa-users' style={{ fontSize: '32px' }}></i>
                                    <small className="pt-1">Crop Health</small>
                                </div>
                                <div className="w-10/12 m-auto mb-2">
                                    <p className="text-gray-500 leading-tight" style={{ fontSize: "11px" }}>Check the health by click the photo.</p>
                                </div>
                                <div className="w-full">
                                    <button type="button" onClick={() => setIsOpen(!isOpen)}
                                        className="float-right font-bold rounded-t-lg rounded-bl-lg rounded-br mx-4 my-2 bg-white text-green-500 px-5 py-0.5"
                                        style={{ fontSize: "15px" }}>Go</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-2 px-2 flex" >
                            <div className="border-2 border-red-800 border-solid w-full flex flex-col rounded-2xl" style={{ backgroundColor: "#8B4513" }}>
                                <div className="flex flex-col my-2 mx-4">
                                    <i className='fa fa-users' style={{ fontSize: '32px' }}></i>
                                    <small className="pt-1">Near By Farmer</small>
                                </div>
                                <div className="w-10/12 m-auto mb-2">
                                    <p className="text-gray-500 leading-tight" style={{ fontSize: "11px" }}>Find the near by location farmer.</p>
                                </div>
                                <div className="w-full">
                                    <Link to="/filterLocation">
                                        <button type="button"
                                            className="float-right font-bold rounded-t-lg rounded-bl-lg rounded-br mx-4 my-2 bg-white text-green-500 px-5 py-0.5"
                                            style={{ fontSize: "15px" }}>Go</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-2 px-2 flex" >
                            <div className="border-2 border-red-800 border-solid w-full flex flex-col rounded-2xl" style={{ backgroundColor: "#FFC107" }}>
                                <div className="flex flex-col my-2 mx-4">
                                    <i className='fa fa-users' style={{ fontSize: '32px' }}></i>
                                    <small className="pt-1">Weather Detail</small>
                                </div>
                                <div className="w-10/12 m-auto mb-2">
                                    <p className="text-gray-500 leading-tight" style={{ fontSize: "11px" }}>Check the weather detail up to next five days.</p>
                                </div>
                                <div className="w-full">
                                    <Link to="/weatherdata">
                                        <button type="button"
                                            className="float-right font-bold rounded-t-lg rounded-bl-lg rounded-br mx-4 my-2 bg-white text-green-500 px-5 py-0.5"
                                            style={{ fontSize: "15px" }}>Go</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-2 px-2 flex" >
                            <div className="border-2 border-red-800 border-solid w-full flex flex-col rounded-2xl" style={{ backgroundColor: "#03A9F4" }}>
                                <div className="flex flex-col my-2 mx-4">
                                    <i className='fa fa-users' style={{ fontSize: '32px' }}></i>
                                    <small className="pt-1">Expert Assistant</small>
                                </div>
                                <div className="w-10/12 m-auto mb-2">
                                    <p className="text-gray-500 leading-tight" style={{ fontSize: "11px" }}>Take the advices from the experts.</p>
                                </div>
                                <div className="w-full">
                                    <button type="button"
                                        className="float-right font-bold rounded-t-lg rounded-bl-lg rounded-br mx-4 my-2 bg-white text-green-500 px-5 py-0.5"
                                        style={{ fontSize: "15px" }}>Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
