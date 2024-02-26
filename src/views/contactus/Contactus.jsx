import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendResponse() {
    const response = await axios.post(
      "http://localhost:5000/api/contact/sendmessage",
      {
        name: name,
        email: email,
        message: message,
      },
    );

    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Success",
      });
    } else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
    }
    setEmail("");
    setMessage("");
    setName("");
  }

  return (
    <div className="bg-blue-900 text-white h-screen">
      <div id="section-wrapper" className="p-8">
        <div className="flex items-center justify-center">
          <div className="info-wrap w-1/2 p-8 bg-blue-800 rounded-l-lg">
            <h2 className="info-title text-2xl">Contact Information</h2>
            <h3 className="info-sub-title text-base mt-4">
              Fill up the form and our Team will get back to you within 24 hours
            </h3>
            <ul className="info-details mt-8">
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span>
                <a href="tel:+ 1235 2355 98" className="text-blue-300">
                  +91-7893158758
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-paper-plane"></i>
                <span>Email:</span>
                <a href="mailto:info@yoursite.com" className="text-blue-300">
                  mohammedavez125@gmail.com{" "}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-globe"></i>
                <span>Website:</span>
                <a
                  href="https://gymsystem.onrender.com/login"
                  className="text-blue-300"
                >
                  Comming soon
                </a>
              </li>
            </ul>
            <ul className="social-icons mt-8 flex space-x-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook text-blue-300"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter text-blue-300"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in text-blue-300"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="form-wrap w-1/2 p-8 rounded-r-lg bg-blue-900">
            <h2 className="form-title text-2xl">Send us a message</h2>
            <div className="form-fields mt-8 text-black">
              <div className="form-group w-1/2 mr-4">
                <input
                  type="text"
                  className="fname w-full p-2 rounded-md"
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group w-1/2">
                <input
                  type="email"
                  className="email w-full p-2 rounded-md my-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group w-full mt-4">
                <textarea
                  name="message"
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 rounded-md h-32"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              onClick={sendResponse}
              value="Send Message"
              className="submit-button bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Contactus;
