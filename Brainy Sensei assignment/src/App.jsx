import React from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
