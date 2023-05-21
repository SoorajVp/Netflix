import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actions, originals } from "./urls"

import "./App.css";

const App = () => {
    return (
        <div className="App">
           <Navbar />
           <Banner />
           <RowPost url = {originals} key = "Netflix Originals"  />
           <RowPost url = {actions} key = "Actions" isSmall />

        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);