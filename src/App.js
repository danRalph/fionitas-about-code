import React, { useEffect } from "react";
import './App.css';
import About from './components/About';

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
        duration: 900,
        once: true
    });
    AOS.refresh();
});

  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
