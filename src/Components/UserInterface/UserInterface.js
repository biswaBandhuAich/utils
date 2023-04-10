import React, { useState } from "react";
import NavBar from "../Header/NavBar";
import TextUtils from "../Body/TextUtils/TextUtils";
import About from "../Body/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpenseTracker from "../Body/ExpenseTracker/ExpenseTracker";
import Alert from "../Alert/Alert";
import AllNews from "../Body/News/AllNews";

export default function UserInterface() {
  //Implement the below function for dark mode
  function toggleDarkMode(value) {
    if (value) {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(6 25 54)";
    } else {
      document.body.style.backgroundColor = "white";

      setMode("light");
    }
  }
  function showAlert(msg) {
    setMessage(msg);
    setVisibility(true);

    setTimeout(() => {
      setMessage("");
      setVisibility(false);
    }, 1500);
  }

  const [title1, setTitle1] = useState("All Utility");
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("This is to show alert");
  const [mode, setMode] = useState("light"); // dark / light

  function handleTitleChange(titleValue) {
    setTitle1(titleValue);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar
          titleChange={handleTitleChange}
          darkMode={toggleDarkMode}
          title={title1}
          mode={mode}
        />
        <Alert alertDispaly={visibility} displayMessage={message} />
        <Routes>
          <Route path="/" element={<About alert={showAlert} mode={mode} />} />
          <Route
            path="/tu"
            element={<TextUtils alert={showAlert} mode={mode} />}
          />
          <Route
            path="/et"
            element={<ExpenseTracker alert={showAlert} mode={mode} />}
          />
          <Route
            path="/news"
            element={<AllNews alert={showAlert} mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
