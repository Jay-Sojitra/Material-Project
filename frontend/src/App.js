import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./components/Home/Home";
import React from "react";
import WebFont from "webfontloader";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;