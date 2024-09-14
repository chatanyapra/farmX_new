import React from 'react';

function GetToKnow({ items }) {
  return (
    <div className="w-full pt-2 px-2 flex">
          <div className="border-2 border-red-800 border-solid w-full flex flex-col rounded-2xl">
            <div className="flex flex-col my-2 mx-4">
              <i className='fa fa-users' style={{fontSize:'32px'}}></i>
              <small className="pt-1">Get To Know</small>
            </div>
            <div className="w-10/12 m-auto mb-2">
              <p className="text-gray-500 leading-tight" style={{fontSize: "11px"}}>Get to know Get to know Get
                to know Get to know</p>
            </div>
            <div className="w-full">
              <button type="button"
                className="float-right font-bold rounded-t-lg rounded-bl-lg rounded-br mx-4 my-2 bg-white text-green-500 px-5 py-0.5"
                style={{fontSize: "15px"}}>Go</button>
            </div>
          </div>
        </div>
  );
}

export default GetToKnow;
