import * as React from "react";
import logo from './assets/images/ski.jpeg';
import './assets/css/App.css';
import Welcome from './components/pages/Welcome';
// import { Routes, Route } from "react-router-dom";
import Router from './routes/Router';
import { gsap } from "gsap";
// function Welcome(props) {
//   return <h1>Hello, welcome to {props.name} {props.lastName} 's website</h1>;
// }
export default function App() {

  React.useEffect(() => {
    gsap.from(".App-logo", { x: -500, duration: 0.5, onComplete: () => gsap.to(".App-logo", { x: "0", duration: 1 }) });
  }, []);
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Welcome name="Zhu" lastName="Huang" />
      </header>
      <Router />
    </div>
  );
};
