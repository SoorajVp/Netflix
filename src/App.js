import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actions, originals, trendings, romanctics, horrors, comedies } from "./urls"
import "./App.css";

const App = () => {
    return (
        
        <div className="App">
           <Navbar />
           <Banner />
           <RowPost url = {originals} title = "Netflix Originals"  />
           <RowPost url = {actions} title = "Actions" isSmall />
           <RowPost url = {trendings} title = "Trending" isSmall />
           <RowPost url = {romanctics} title = "Romance Movies"  />
           <RowPost url = {horrors} title = "Horror Movies" isSmall />
           <RowPost url = {comedies} title = "Comedy Movies" isSmall />
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);