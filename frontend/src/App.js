import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import PythonPage  from "./PythonTests";
import JavaPage  from "./JavaTests";
import JavaScriptPage from "./JavaScript";
import TestComparator from "./TestComparator"
import Readme from "./Readme";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<HomePage />}></Route>
        <Route path ="/generador" element={<TestComparator />}></Route>
        <Route path ="/readme" element={<Readme />}></Route>
        <Route path ="/java" element={<JavaPage />}></Route>
        <Route path ="/python" element={<PythonPage />}></Route>
        <Route path ="/javascript" element={<JavaScriptPage />}></Route>
      </Routes>
    </Router>
  );
}


export default App;
