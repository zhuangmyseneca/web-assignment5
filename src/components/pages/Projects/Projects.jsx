import React from 'react';
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h2>my projects</h2>
      <NavLink to="/projects/animation">
        <button>Animation</button>
      </NavLink>
      <NavLink to="/projects/photoshop">
        <button>Photoshop</button>
      </NavLink>
    </div>
  );
}


