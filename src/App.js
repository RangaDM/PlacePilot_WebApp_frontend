import React from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Logic from "./Components/Logic";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="logic"><Logic /></div>
      {/* <div id="testimonial"><Testimonial /></div> */}
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;