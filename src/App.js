import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer, useState } from "react";
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
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";
import PlayGround from "./Components/PlayGround";
axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const initialState = {
    loggedIn: localStorage.getItem("complexappToken"),
    flashMessages: [],
  };

  function ourReducer(state, action) {
    switch (action.type) {
      case "login":
        return { loggedIn: true, flashMessages: state.flashMessages };

      case "logout":
        return { loggedIn: false, flashMessages: state.flashMessages };

      case "flashMessage":
        return {
          loggedIn: state.loggedIn,
          flashMessages: state.flashMessages.concat(action.value),
        };

      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(ourReducer, initialState);

  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <FlashMessages messages={state.flashMessages} />
            <Header />
            <Routes>
              <Route
                path="/"
                element={state.loggedIn ? <Home /> : <HomeGuest />}
              />
              <Route path="/post/:id" element={<ViewSinglePost />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/PlayG" element={<PlayGround />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
