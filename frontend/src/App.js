import React, { useEffect, useState } from "react"; // library to use React Components
import Axios from "axios"; // library for making HTTP requests with backend
import { Route, Routes } from "react-router-dom"; // library for dynamic routing

//imports from own components
import NavBar from "./pages/components/navBar";
import StickyFooter from "./pages/components/stickyFooter";
import Home from "./pages/home";
import BotBuilder from "./pages/botBuilder";
import Login from "./pages/login";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import Tutorial from "./pages/tutorial";
import GetStarted from "./pages/getStarted";
import auth from "./services/authService";
import ProtectedRoute from "./pages/components/common/protectedRoute";
import BotRepository from "./pages/botRepository";
import Logout from "./pages/components/logout";

const App = () => {
  const [user, setUser] = useState(null); //holds current user data if logged in

  // fetch current user's auth and set it in the user state when the component mounts
  useEffect(() => {
    const currentUser = auth.verifyToken();
    setUser(currentUser);
  }, []);

  return (
    // React.Fragment to group multiple elements without adding a new parent element to the DOM
    // Rendering Navbar at the top and then the main container
    // Main container contains Routes for the different pages of the website
    <React.Fragment>
      <NavBar user={user} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bot-builder" element={<BotBuilder />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <StickyFooter />
      </main>
    </React.Fragment>
  );
};

export default App;
