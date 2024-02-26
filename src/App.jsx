import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import UserDetails from "./views/Home/UserDetails";
import ImageUpload from "./views/upload/ImageUpload";
import Navbar from "./views/components/Navbar";
import Contactus from "./views/contactus/Contactus";
import Home from "./views/Home/Home";
import Aboutus from "./views/aboutus/Aboutus";
import Browse from "./views/Main/Browse";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("loggedIn") === "true",
  );

  const handleLogout = () => {
    window.localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Navigate to="/main" /> : <Login />}
        />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Login />} />
        <Route
          path="/contactus"
          element={isLoggedIn ? <Contactus /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/aboutus"
          element={isLoggedIn ? <Aboutus /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Home"
          element={isLoggedIn ? <Home /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/main"
          element={isLoggedIn ? <ImageUpload /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/userDetails"
          element={isLoggedIn ? <UserDetails /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/browse"
          element={isLoggedIn ? <Browse /> : <Navigate to="/sign-in" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
