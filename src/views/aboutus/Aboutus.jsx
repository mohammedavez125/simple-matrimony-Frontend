import React from "react";
import user from "./user.png";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamMember = ({ name, college, course, github, twitter, instagram }) => (
  <div className="m-4 bg-gray-800 rounded-lg overflow-hidden mt-20 relative max-h-[400px]">
    <div className="bg-[rgba(255, 255, 255, 0.05)] shadow-lg rounded-lg relative flex flex-col items-center p-8 hover:opacity-100 hover:translate-y-[-10px] transition duration-300 backdrop-blur-[10px]">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[rgba(255, 255, 255, 0.25)]">
        <img
          src={user}
          alt={`User ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-white text-center mt-8">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-2">
          {college}
          <br />
          {course}
        </p>
      </div>
    </div>

    <ul className="w-full flex justify-center absolute bottom-4 space-x-4 z-10">
      <li>
        <a href={github} className="text-white text-2xl hover:text-blue-500">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href={twitter} className="text-white text-2xl hover:text-blue-500">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href={instagram} className="text-white text-2xl hover:text-blue-500">
          <FaInstagram />
        </a>
      </li>
    </ul>
  </div>
);

function Aboutus() {
  return (
    <div className="h-fit flex flex-col bg-gray-900 text-white">
      <h3 className="text-center font-semibold text-3xl my-10" id="team">
        Our Team
      </h3>
      <section className="flex justify-center flex-wrap bg-gradient-to-r from-blue-600 to-purple-600 before:bg-gradient-to-r before:from-teal-600 before:to-purple-600 before:clip-path-[30% at right 70%] after:bg-gradient-to-r after:from-pink-600 after:to-purple-600 after:clip-path-[20% at 10% 10%] relative min-h-screen">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Avez",
    college: "DCET",
    course: "BE(Computer Science)",
    github: "https://github.com/mohammedavez125",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Faiq",
    college: "DCET",
    course: "BE(Computer Science)",
    github: "https://github.com",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Zeshan",
    college: "DCET",
    course: "BE(Computer Science)",
    github: "https://github.com",
    twitter: "#",
    instagram: "#",
  },
];

export default Aboutus;
