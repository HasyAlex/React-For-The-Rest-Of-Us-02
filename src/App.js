import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
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

import axios, * as others from "axios";
import ExampleContext from "./ExampleContext";
import PlayGround from "./Components/PlayGround";
axios.defaults.baseURL = "http://localhost:8080";

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
      <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn }}>
        <BrowserRouter>
          <Header loggedIn={loggedIn} />
          <FlashMessages messages={flashMessages} />
          <Routes>
            <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
            <Route path="/post/:id" element={<ViewSinglePost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/PlayG" element={<PlayGround />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ExampleContext.Provider>
    </div>
  );
}

export default App;
