import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import Routess from "./Components/Front/Routes/Routess";
const App = () => {
  const { productItem } = data;
  return <div>
    <Router>
    <Header/>
    <Routess productItem={productItem}/>
    </Router>
  </div>;
};

export default App;
