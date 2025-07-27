import React from "react";
import { createRoot } from "react-dom/client";
//! To create components we have two ways
// 1 Class based
// 2 Functional based

import App from "./App";
createRoot(document.querySelector('#root')).render(<App/>) //component composition