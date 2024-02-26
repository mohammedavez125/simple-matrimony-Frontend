// import React, { useEffect, useState } from "react";
// import Form from "./Form";

// function ImageUpload() {
//   const [formData, setFormData] = useState({
//     image: "",
//     name: "",
//     id: "",
//     age: "",
//     height: "",
//     caste: "",
//     education: "",
//     image: "",
//     weight: "",
//     salary: "",
//     profession: "",
//   });
//   console.log(formData);

//   // function uploadImage() {
//   //   fetch("http://localhost:5000/api/image/upload-image", {
//   //     method: "POST",
//   //     crossDomain: true,
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Accept: "application/json",
//   //       "Access-Control-Allow-Origin": "*",
//   //     },
//   //     body: JSON.stringify({
//   //       base64: image,
//   //     }),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => console.log(data));
//   // }

//   // function getImage() {
//   //   fetch("http://localhost:5000/api/image/get-image", {
//   //     method: "GET",
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setAllImage(data.data);
//   //     });
//   // }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       {/* {allImage.map((data, index) => (
//             <img
//               key={index}
//               className="mb-4"
//               width={100}
//               height={100}
//               src={data.image}
//               alt={`Uploaded Image ${index + 1}`}
//             />
//           ))} */}
//       <Form formData={formData} setFormData={setFormData} />
//     </div>
//   );
// }

// export default ImageUpload;
import React, { useState } from "react";
import BrideForm from "./BrideForm";
import GroomForm from "./GroomForm";

function ImageUpload() {
  const [isBride, setIsBride] = useState(true);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {isBride ? (
          <BrideForm setIsBride={setIsBride} isBride={isBride} />
        ) : (
          <GroomForm setIsBride={setIsBride} isBride={isBride} />
        )}
      </div>
    </>
  );
}

export default ImageUpload;
