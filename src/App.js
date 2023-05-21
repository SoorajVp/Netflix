import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

import "./App.css";


const App = () => {
    return (
        <div className="App">
           <Navbar />
           <Banner />
           <RowPost />
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);