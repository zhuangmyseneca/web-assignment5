

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TransitionComponent from '../components/Transition';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Projects from '../components/pages/Projects/Projects';
import AnimationProject from '../components/pages/Projects/AnimationProject';
import PhotoshopProject from '../components/pages/Projects/PhotoshopProject';
import Layout from '../components/Layout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TransitionComponent><Home /></TransitionComponent>} />
        <Route path="about" element={<TransitionComponent><About /></TransitionComponent>} />
        <Route path="projects" element={<TransitionComponent><Projects /></TransitionComponent>}>
          <Route index element={<AnimationProject />} />
          <Route path="animation" element={<AnimationProject />} />
          <Route path="photoshop" element={<PhotoshopProject />} />
        </Route>
        <Route path="contact" element={<TransitionComponent><Contact /></TransitionComponent>} />
      </Route>
    </Routes>
  );
};

export default Router;