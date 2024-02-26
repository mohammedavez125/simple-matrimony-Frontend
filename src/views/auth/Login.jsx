import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    if (email != " " && password != "") {
      fetch("http://localhost:5000/api/user/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            window.localStorage.setItem("checkSubscriptionStatus", true);
            window.localStorage.setItem("user", data.user);

            window.location.href = "./home";
          } else {
            alert("User not found. Please check your credentials.");
          }
        });
    } else {
      alert("Please enter your credentials");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <form
          className="bg-white p-8 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold mb-6">Sign In</h3>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" id="customCheck1" />
              <label className="text-sm text-gray-600" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>

          <p className="text-sm text-right mt-4">
            <a href="/sign-up" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
