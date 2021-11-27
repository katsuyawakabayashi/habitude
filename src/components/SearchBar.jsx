import React from 'react';

const SearchBar = () => {
    return (
        <div className="pt-2 mx-auto text-gray-600">
             <input className="border-2 border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-300
             h-10 px-5 pr-16 w-full rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar
