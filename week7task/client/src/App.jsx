import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NewShipForm from "./components/NewShipForm";
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <main>
      <NavBar />
      <NewShipForm />
      <Routes>
        <Route path={"/"} element={<p>Home</p>}></Route>
        <Route path={"blogs"} element={<Blogs />}></Route>
        <Route path={"contact"} element={<Contact />}></Route>
        <Route path={"*"} element={<NoPage />} />
      </Routes>
    </main>
  );
}
