import * as React from "react";
import logo from './assets/images/ski.jpeg';
import './assets/css/App.css';
import Welcome from './components/pages/Welcome';
import Router from './routes/Router';
import { gsap } from "gsap";

export default function App() {
  // logo moves from left side to current position
  React.useEffect(() => {
    gsap.from(".App-logo", { x: -500, duration: 0.5, onComplete: () => gsap.to(".App-logo", { x: "0", duration: 1 }) });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* the name of website can be changed */}
        <Welcome name="Zhu" lastName="Huang" />
      </header>
      <Router />
    </div>
  );
};
