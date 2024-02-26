import React, { useState } from "react";
import axios from "axios";

const BrideForm = (props) => {
  // const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    user_id: window.localStorage.getItem("user") ,
    age: "",
    weight: "",
    height: "",
    caste: "",
    education: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bride/add", formData);
      alert("Bride data submitted successfully!");
      setFormData({
        image: "",
        name: "",
        user_id: window.localStorage.getItem("user") ,
        age: "",
        weight: "",
        height: "",
        caste: "",
        education: "",
      });
      
      <Navigate to="/sign-in" />
    } catch (error) {
      console.error("Error submitting bride data:", error);
      alert("Error submitting bride data. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-lg p-8 shadow-lg"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">
              Select Gender:
            </label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="bride"
                  checked={props?.isBride}
                  onChange={() => props?.setIsBride(true)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Bride</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="groom"
                  checked={!props?.isBride}
                  onChange={() => props.setIsBride(false)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Groom</span>
              </label>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Add a Bride</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">
              Upload Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={convertToBase64}
              className="mt-2"
            />
            {formData.image && (
              <img
                className="mt-4"
                width={100}
                height={100}
                src={formData.image}
                alt="Uploaded Preview"
              />
            )}
          </div>
          <br/>
          <div>
            <label className="block mb-2 text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Height:</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Caste:</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Education:</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Weight:</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrideForm;
