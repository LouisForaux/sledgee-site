import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './LandingPage';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/paper-kit.css";
// import "./assets/css/paper-kit.min.css";
// import "./assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";


import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import Thanks from './Thanks';

var pjson = require('../package.json');

Sentry.init({
  dsn: "https://bdaff428c0b94c7c9e8fbae06c238785@o921091.ingest.sentry.io/6657003",
  
  integrations: [new BrowserTracing()],
  release: "sledgee-site-publique@" + pjson.version,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  // tracesSampleRate: 1.0,
  // autoSessionTracking: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<LandingPage />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/" element={<Navigate replace to="/index" />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
