import React, { useState } from "react";

const Form = (props) => {
  const [isBride, setIsBride] = useState(true);
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setFormData({
      ...props.formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFormData({
      image: image,
      name: "",
      id: "",
      age: "",
      height: "",
      caste: "",
      education: "",
      weight: "",
      salary: "",
      profession: "",
    });
  };

  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      props.setFormData({
        ...props.formData,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6">
          Add a {isBride ? "Bride" : "Groom"}
        </h2>

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
                  checked={isBride}
                  onChange={() => setIsBride(true)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Bride</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="groom"
                  checked={!isBride}
                  onChange={() => setIsBride(false)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Groom</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={props.formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* <div>
            <label className="block mb-2 text-sm font-medium">ID:</label>
            <input
              type="text"
              name="id"
              value={props.formData.id}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div> */}
          <div>
            <label className="block mb-2 text-sm font-medium">Age:</label>
            <input
              type="number"
              name="age"
              value={props.formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Height:</label>
            <input
              type="text"
              name="height"
              value={props.formData.height}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Caste:</label>
            <input
              type="text"
              name="caste"
              value={props.formData.caste}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Education:</label>
            <input
              type="text"
              name="education"
              value={props.formData.education}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {!isBride && (
            <>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Weight:
                </label>
                <input
                  type="text"
                  name="weight"
                  value={props.formData.weight}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Salary:
                </label>
                <input
                  type="number"
                  name="salary"
                  value={props.formData.salary}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Profession:
                </label>
                <input
                  type="text"
                  name="profession"
                  value={props.formData.profession}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </>
          )}
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

export default Form;
