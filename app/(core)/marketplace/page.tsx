import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-between w-full rounded-3xl overflow-hidden shadow-lg">
      {/* upper image section need to change  */}
      <div className="flex-1">
        <img
          src="https://via.placeholder.com/1920x420"
          alt="Upper Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image bottom section */}
      <div className="container mx-auto px-6 py-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Kadena Mining Club - Official NFTs</h1>
            <div className="flex space-x-4 mt-2">
              <div className="text-sm">
                <span className="font-bold">10420</span> items
              </div>
              <div className="text-sm">
                <span className="font-bold">955</span> owners
              </div>
              <div className="text-sm">
                <span className="font-bold">149</span> for sale
              </div>
              <div className="text-sm text-purple-600 font-bold">K 1430.1K</div>
              <div className="text-sm text-purple-600 font-bold">K 19</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <img
              src="https://icons8.com/icons/set/discord" // Replace with correct icon URL
              alt="Discord"
              className="h-6 w-6"
            />
            <img
              src="https://icons8.com/icons/set/telegram" // Replace with correct icon URL
              alt="Telegram"
              className="h-6 w-6"
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex space-x-2 mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Miners</button>
          <button className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">Asics</button>
          <button className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">Vials</button>
          <button className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">FP</button>
          <button className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">Activity</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">All</button>
          <button className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">Miners Collection Offers</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Make collection offer</button>
        </div>

        {/* Search and Filters Section */}
        <div className="flex space-x-4 mt-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 bg-purple-100 rounded-lg outline-none"
          />
          <select className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <select className="px-4 py-2 bg-purple-100 text-gray-700 rounded-lg">
            <option>Miner: Any</option>
            <option>Miner 1</option>
            <option>Miner 2</option>
          </select>
        </div>
      </div>
  
      {/* container section, need to optimize if we fetch data from backend */}
      <div className="bg-gray-200 p-6 flex justify-between gap-6">
      <div className="bg-white p-2 rounded-lg shadow-md w-1/4 flex flex-col items-left">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Upper Image"
            className="w-full h-full object-cover"
          />
          <p className="text-xs pt-1">This is small text.</p>
          <p className="text-md pt-1 pb-1">This is some text for Container 1.</p>
          <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg">
            Button 1
          </button>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md w-1/4 flex flex-col items-left">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Upper Image"
            className="w-full h-full object-cover"
          />
          <p className="text-xs pt-1">This is small text.</p>
          <p className="text-md pt-1 pb-1">This is some text for Container 1.</p>
          <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg">
            Button 1
          </button>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md w-1/4 flex flex-col items-left">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Upper Image"
            className="w-full h-full object-cover"
          />
          <p className="text-xs pt-1">This is small text.</p>
          <p className="text-md pt-1 pb-1">This is some text for Container 1.</p>
          <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg">
            Button 1
          </button>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md w-1/4 flex flex-col items-left">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Upper Image"
            className="w-full h-full object-cover"
          />
          <p className="text-xs pt-1">This is small text.</p>
          <p className="text-md pt-1 pb-1">This is some text for Container 1.</p>
          <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg">
            Button 1
          </button>
        </div>
      </div>
    </div>
  )
}

export default page