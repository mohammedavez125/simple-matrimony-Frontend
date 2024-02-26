import React from "react";

function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-semibold mb-4">User Home</h1>
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-bold">Name:</span> {userData.fname}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> {userData.email}
            </p>
          </div>
          <button
            onClick={logOut}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
