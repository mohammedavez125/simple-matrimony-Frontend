import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage:
          "url('https://atcwedding.com/blog/wp-content/uploads/2017/05/best-online-wedding-website.jpg')",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl text-black mb-4 font-bold animate__animated animate__fadeInDown">
          World's No.1 Matrimonial Service
        </h1>
        <h3 className="text-xl text-gray-600 mb-8 animate__animated animate__slideInUp">
          Find your soulmate by community, profession, and more
        </h3>
        <button className="btn bg-pink-400 text-black px-8 py-3 rounded-full animate__animated animate__bounce animate__delay-2s hover:bg-pink-500">
          <Link to="/browse">Let's Begin</Link>
        </button>
      </div>
      {/* <div className="mt-12 text-center">
        <h2 className="text-2xl text-black mb-4 font-bold">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeInLeft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque turpis eget mauris fermentum, id tristique leo
          sollicitudin. Nullam hendrerit felis vitae libero dictum, in dapibus
          risus tincidunt. Duis porta ligula sed nisl fringilla, sed aliquam
          libero malesuada.
        </p>
        <h2 className="text-2xl text-black mb-4 font-bold">Our Services</h2>
        <ul className="list-disc text-lg text-gray-600 ml-8">
          <li>Personalized matchmaking</li>
          <li>Advanced search filters</li>
          <li>24/7 customer support</li>
          <li>Secure and private communication</li>
        </ul>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl text-black mb-4 font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-md bg-white animate__animated animate__fadeInUp">
            <p className="text-gray-600">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque turpis eget mauris fermentum."
            </p>
            <p className="text-black font-semibold mt-2">- John Doe</p>
          </div>
          <div className="border p-4 rounded-md bg-white animate__animated animate__fadeInUp animate__delay-1s">
            <p className="text-gray-600">
              "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla fringilla, eros vitae iaculis
              fermentum, erat quam fermentum arcu, a eleifend lectus tellus
              vel purus."
            </p>
            <p className="text-black font-semibold mt-2">- Jane Doe</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
