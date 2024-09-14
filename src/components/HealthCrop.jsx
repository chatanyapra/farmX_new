import React, { useState, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LuX } from "react-icons/lu";
import Loader from './Loader';
import { useButtonContext } from '../context/HealthAiContext';

const genAI = new GoogleGenerativeAI("AIzaSyBogLPBdn-n_-pCI5Cz5fdacYEEkYoIDmM");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function HealthCrop() {
    const { isOpen, setIsOpen } = useButtonContext();
    const fileInputRef = useRef(null);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [imageResult, setImageResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRemoveFile = () => {
        setSelectedMedia(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Convert the file to a generative part using FileReader
    const fileToGenerativePart = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve({
                    inlineData: {
                        data: reader.result.split(',')[1], // Extract base64 data
                        mimeType: file.type,
                    },
                });
            };
            reader.readAsDataURL(file); // Read file as Data URL
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        if (!selectedMedia) {
            console.error("No image file selected");
            return;
        }

        const prompt = "Summarize the health and name of the given crop image in maximum 300 word.";
        const imagePart = await fileToGenerativePart(selectedMedia);

        setSelectedMedia(null);
        try {
            const result = await model.generateContent([prompt, imagePart]);
            const generatedText = await result.response.text();
            // console.log(generatedText);
            setImageResult(generatedText);
        } catch (error) {
            console.error("Error generating content:", error);
        }
        setLoading(false)
        handleRemoveFile();
    };

    const handleMediaChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedMedia(file);  // Store the File object
        }
    };

    const toggleForm = () => {
        setIsOpen(false);
        handleRemoveFile();
        setImageResult(null)
    };

    return (
        <div>

            {isOpen && (
                <>
                    <div className='w-full h-full bg-transparent absolute bottom-0 left-0 z-10' onClick={() => {setIsOpen(false)}}></div>
                    <div className="absolute bottom-2 left-2 bg-white p-4 rounded-2xl shadow-lg w-80 h-auto z-20">
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            {selectedMedia && (
                                <div className='absolute top-10 w-11/12 h-40 bg-blue-200 rounded-md overflow-hidden z-10'>
                                    <div className='relative flex w-full h-full '>
                                        <div className='w-[calc(100%-75px)] m-3 mb-8 border-2 border-gray-400 border-dashed rounded-md'>
                                            <img
                                                src={URL.createObjectURL(selectedMedia)} // Use Object URL to display preview
                                                alt="Selected Image"
                                                className="h-full"
                                            />
                                        </div>
                                        <LuX
                                            type="button"
                                            className="absolute right-6 top-20 text-2xl text-gray-500 outline-dashed outline-2 outline-offset-4 rounded-full cursor-pointer"
                                            onClick={handleRemoveFile}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="mb-4">
                                <span className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUpload">
                                    Upload Crop Image
                                </span>
                                <div className="relative">
                                    <input
                                        id="imageUpload"
                                        type="file"
                                        accept="image/*"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handleMediaChange}
                                        ref={fileInputRef}
                                    />
                                    <label
                                        htmlFor="imageUpload"
                                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12 text-gray-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="ml-2">Click to upload image</span>
                                    </label>
                                </div>
                            </div>
                            {loading && (
                                <Loader />
                            )}
                            {imageResult && (
                                <div className='w-full min-h-24 rounded-xl border-2 border-gray-300 border-dashed mb-3'>
                                    <p className='text-xs font-semibold p-3'>
                                        {imageResult}
                                    </p>
                                </div>
                            )}
                            <div className="flex justify-end mt-10">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleForm}
                                    className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 focus:outline-none"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default HealthCrop;
