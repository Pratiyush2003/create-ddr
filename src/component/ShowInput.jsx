import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { createfarmer, showfarmer, searchfarmer } from "../assets/features/Apihandler";
import { useDispatch, useSelector } from "react-redux";

const ShowInput = () => {
  const dispatch = useDispatch();
  const { searchedfarmer } = useSelector((state) => state.app);

  const [input, setInput] = useState({
    clusterIncharge: "",
    variety: "",
    cropType: "",
    source: "",
    deliveryDate: "",
  });

  const [farmerCode, setFarmerCode] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const submissionData = { ...input, farmerCode };
    dispatch(createfarmer(submissionData));
  };

  const debouncedSearch = useCallback(
    debounce((code) => {
      if (!code) {
        alert("Enter farmer code : 58");
        return;
      }
      dispatch(searchfarmer(code));
    }, 300),
    [dispatch]
  );

  const search = () => {
    debouncedSearch(farmerCode);
  };

  useEffect(() => {
    dispatch(showfarmer());
  }, [dispatch]);

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
            name="clusterIncharge"
            value={input.clusterIncharge}
            onChange={handleInput}
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          >
            <option value="">Select an Incharge</option>
            <option value="Ronaldo">Ronaldo</option>
            <option value="Messi">Messi</option>
            <option value="Neymar">Neymar</option>
            <option value="John Doe">John Doe</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <label htmlFor="variety" className="text-xl font-serif sm:w-1/3">
            Variety
          </label>
          <select
            id="variety"
            name="variety"
            value={input.variety}
            onChange={handleInput}
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
            name="cropType"
            value={input.cropType}
            onChange={handleInput}
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
            name="source"
            value={input.source}
            onChange={handleInput}
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
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={input.deliveryDate}
            onChange={handleInput}
            className="w-full sm:w-2/3 outline-none rounded-lg border border-gray-400 px-4 py-2"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8">
          <div className="w-full sm:w-2/3 flex items-center space-x-4">
            <p className="text-xl font-serif">Farmer Code:</p>
            <input
              type="number"
              name="farmerCode"
              placeholder="farmer code = 58"
              value={farmerCode}
              onChange={(e) => setFarmerCode(e.target.value)}
              className="outline-none rounded-lg border border-gray-400 px-4 py-2 w-full sm:w-auto"
            />
          </div>
          <button
            className="mt-4 sm:mt-0 bg-black text-white rounded-lg hover:bg-gray-700 px-6 py-2 transition-colors"
            onClick={search}
          >
            Add
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xl font-serif mt-2">Data Grid</p>
          <p className="text-xl font-serif mt-2">
            Farmer Code : {searchedfarmer[0]?.farmercode}
          </p>
          <p className="text-xl font-serif mt-2">
            Eligible Qty: {searchedfarmer[0]?.eligibleqty}
          </p>
          <p className="text-xl font-serif mt-2">
            DDR Qty : {searchedfarmer[0]?.ddrqty}
          </p>
        </div>

        <div className="mt-4 text-end">
          <p className="text-xl font-serif mt-2">
            Total:{" "}
            {searchedfarmer[0]?.eligibleqty
              ? `${parseInt(searchedfarmer[0].eligibleqty) + (searchedfarmer[0].ddrqty || 0)}`
              : 0}{" "}
          </p>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-xl font-serif">
            Location : {searchedfarmer[0]?.deliverylocation}
          </p>
          <p className="text-xl font-serif">
            State : {searchedfarmer[0]?.state}
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-black text-white rounded-lg hover:bg-gray-700 px-6 py-2 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowInput;
