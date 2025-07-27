import React from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import FBC from "./FBC";
import UsestateObj from "./UsestateObj";
import CBCwithState from "./CBCwithState";
// createRoot(document.getElementById('root')).render(<App/>)
// createRoot(document.getElementById('root')).render(<FBC/>)
// createRoot(document.getElementById('root')).render(<UsestateObj/>)
createRoot(document.getElementById('root')).render(<CBCwithState/>)