import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";

export default class App extends React.Component {
  render = () => {
    return (
      <>
        <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemList />} />
            {/* <Route path="/item/:id" element={<ItemList />} /> */}
          </Routes>
        </BrowserRouter>
        </div>
      </>
    );
  };
}

