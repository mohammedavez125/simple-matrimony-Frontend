import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewDetail from "./ViewDetail";
import { GiMale, GiFemale } from "react-icons/gi";
import "./browse.css";

const Browse = () => {
  const [isBride, setIsBride] = useState(true);
  const [bridesGrooms, setBridesGrooms] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [activeOption, setActiveOption] = useState("bride");

  useEffect(() => {
    fetchData();
  }, [isBride]); // Refetch data when the isBride state changes



  const fetchData = async () => {
    try {
      const response = await axios.get(
        isBride
          ? "http://localhost:5000/api/bride/view"
          : "http://localhost:5000/api/groom/view",
      );
      setBridesGrooms(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOptionChange = (option) => {
    setActiveOption(option);
    setIsBride(option === "bride");
  };

  const handleViewDetails = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseViewDetail = () => {
    setSelectedPerson(null);
  };

  const checkSubscriptionStatus = () => {
    const subscriptionStatus = JSON.parse(
      window.localStorage.getItem("checkSubscriptionStatus"),
    );
    return subscriptionStatus;
  };

  return (
    <div
      className={`flex flex-col items-center pt-8 h-screen ${isBride ? "bg-pink-300" : "bg-blue-300"} transition-all duration-500`}
    >
      <div className="container mx-auto mt-8 ">
        <div className="flex justify-center ">
          <div
            className={`option p-4 rounded-md flex items-center justify-center cursor-pointer mr-3 ${
              activeOption === "bride"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => handleOptionChange("bride")}
          >
            <GiFemale className="icon mr-2" />
            Bride
          </div>

          <div
            className={`option p-4 rounded-md flex items-center justify-center cursor-pointer  ${
              activeOption === "groom"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 "
            }`}
            onClick={() => handleOptionChange("groom")}
          >
            <GiMale className="icon mr-2" />
            Groom
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {bridesGrooms &&
          bridesGrooms.map((person,index) => (
            <div
              key={person.id}
              className={`border border-gray-200 p-4 ${checkSubscriptionStatus() ? "" : "filter blur-md"}`}
            >
              <img
                  key={index}
                  className="mb-4"
                  width={100}
                  height={100}
                  src={person?.image}
                  alt={`Uploaded Image ${index + 1}`}
                />
              <h2 className="text-lg font-semibold">{person?.name}</h2>
              <p className="text-gray-500">Age: {person?.age}</p>
              <p className="text-gray-500">Caste: {person?.caste}</p>
              <p className="text-gray-500">Education: {person?.education}</p>
              <p className="text-gray-500">Height: {person?.height}</p>
            </div>
          ))}
      </div>
      {selectedPerson && (
        <ViewDetail onClose={handleCloseViewDetail}>
          <h2 className="text-xl font-semibold">{selectedPerson.name}</h2>
          <p>Age: {selectedPerson.age}</p>
          <p>Caste: {selectedPerson.caste}</p>
        </ViewDetail>
      )}
    </div>
  );
};

export default Browse;
