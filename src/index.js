import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OrgLandingPage from './OrgLandingPage';
import reportWebVitals from './reportWebVitals';
import Components from './Components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import API from './API';
// import { configureProxy } from './setupProxy';

const root = ReactDOM.createRoot(document.getElementById('root'));
// configureProxy(OrgLandingPage);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/:orgName" element={<OrgLandingPage />} />
    <Route path="/:orgName/:components" element={<Components />} />
    <Route path="/:orgName/api/:apiName" element={<API />} />
  </Routes>
</BrowserRouter>
);

reportWebVitals();
