import React from 'react'

const ShowInput = () => {
  return (
    <>
          <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center">
          <label
            htmlFor="clusterIncharge"
            className="text-xl font-serif sm:w-1/3"
          >
            Cluster Incharge
          </label>
          <select
            id="clusterIncharge"
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          >
            <option value="">Select an Incharge</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <label htmlFor="variety" className="text-xl font-serif sm:w-1/3">
            Variety
          </label>
          <select
            id="variety"
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          >
            <option value="">Select a Variety</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="barley">Barley</option>
            <option value="corn">Corn</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <label htmlFor="cropType" className="text-xl font-serif sm:w-1/3">
            Crop Type
          </label>
          <select
            id="cropType"
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          >
            <option value="">Select a Crop Type</option>
            <option value="cereal">Cereal</option>
            <option value="legume">Legume</option>
            <option value="fruit">Fruit</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <label htmlFor="source" className="text-xl font-serif sm:w-1/3">
            Source
          </label>
          <select
            id="source"
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          >
            <option value="">Select a Source</option>
            <option value="local">Local</option>
            <option value="imported">Imported</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <label htmlFor="deliveryDate" className="text-xl font-serif sm:w-1/3">
            Expected Delivery Date
          </label>
          <select
            id="source"
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          >
            <option value="">Select a Source</option>
            <option value="local">Local</option>
            <option value="imported">Imported</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-8">
        <div className="w-full sm:w-2/3 flex items-center space-x-4">
          <p className="text-xl font-serif">Farmer Code:</p>
          <input
            type="text"
            className="outline-none rounded-lg border border-gray-400 px-4 py-2 w-full sm:w-auto"
          />
        </div>
        <button className="mt-4 sm:mt-0 bg-black text-white rounded-lg hover:bg-gray-700 px-6 py-2 transition-colors">
          Add
        </button>
      </div>
    </>
  )
}

export default ShowInput