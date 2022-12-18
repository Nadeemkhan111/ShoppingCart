import React from "react";
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import {BrowserRouter as Router} from "react-router-dom"
const App = () => {
  const { productItem } = data;
  return <div>
    <Router>

    <Header/>
    </Router>
  </div>;
};

export default App;
