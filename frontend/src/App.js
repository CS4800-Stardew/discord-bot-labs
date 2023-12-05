import React, { useEffect, useState } from "react"; // library to use React Components
import Axios from "axios"; // library for making HTTP requests with backend
import { Route, Routes } from "react-router-dom"; // library for dynamic routing

//imports from own components
import NavBar from "./pages/components/navBar";
import StickyFooter from "./pages/components/stickyFooter";
import Home from "./pages/home";
import BotBuilder from "./pages/botBuilder";
import Login from "./pages/login";
import Auth from "./pages/components/auth";
import Dashboard from "./pages/dashboard";
import Tutorial from "./pages/tutorial";
import GetStarted from "./pages/getStarted";
import auth from "./services/authService";
import ds from "./services/discordService";
import ProtectedRoute from "./pages/components/common/protectedRoute";
import Logout from "./pages/components/logout";

const App = () => {
  //holds current user data if logged in
  const [user, setUser] = useState(null);
  // holds selected guild from dashboard for botbuilder
  const [selectedGuild, setSelectedGuild] = useState(null);

  // fetch current user's auth and set it in the user state when the component mounts
  // sets currentGuild if existing
  useEffect(() => {
    const currentUser = auth.verifyToken();
    const currentGuild = JSON.parse(ds.getActiveGuildData());
    setUser(currentUser);
    setSelectedGuild(currentGuild);
  }, []);

  // useEffect(() => {
  //   console.log(selectedGuild);
  // }, [selectedGuild]);

  return (
    // React.Fragment to group multiple elements without adding a new parent element to the DOM
    // Rendering Navbar at the top and then the main container
    // Main container contains Routes for the different pages of the website
    <React.Fragment>
      <NavBar user={user} selectedGuild={selectedGuild} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/bot-builder" element={<ProtectedRoute />}>
            <Route
              path="/bot-builder"
              element={<BotBuilder selectedGuild={selectedGuild} />}
            />
          </Route>
        </Routes>
        <StickyFooter />
      </main>
    </React.Fragment>
  );
};

export default App;
