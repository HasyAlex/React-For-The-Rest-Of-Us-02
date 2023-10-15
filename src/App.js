import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios, * as others from "axios";
axios.defaults.baseURL = 'http://localhost:8080'

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeGuest from "./Components/HomeGuest";
import Terms from "./Components/Terms";
import About from "./Components/About";
import Home from "./Components/Home";
import FlashMessages from "./Components/FlashMessages";
import CreatePost from "./Components/CreatePost";
import ViewSinglePost from "./Components/ViewSinglePost";


function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <FlashMessages messages={flashMessages} />
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
          <Route path="/post/:id" element={<ViewSinglePost />} />
          <Route
            path="/create-post"
            element={<CreatePost addFlashMessage={addFlashMessage} />}
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
