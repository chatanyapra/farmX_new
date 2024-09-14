import React from 'react'
import DropdownButton from './DropdownButton';
function FilterHome() {
    return (
        <div className="flex w-11/12 h-16 mx-auto justify-between">
            <div className="relative flex justify-evenly bg-black rounded-t-3xl shadow-lg p-2 w-full max-w-3/6 h-16">
                <div className="relative flex justify-evenly bg-black rounded-t-3xl shadow-lg p-2 w-full max-w-3xl h-16">
                    <DropdownButton options={['Option 1', 'Option 2', 'Option 3']} />
                    <DropdownButton options={['Option 1', 'Option 2', 'Option 3']} />
                    <DropdownButton options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
            </div>
        </div>
    );
}

export default FilterHome
