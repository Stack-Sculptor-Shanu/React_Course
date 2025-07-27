import React from "react";
import { createRoot } from "react-dom/client";

//JSX syntax
const element = <h1>Hello</h1>
createRoot(document.querySelector("#root")).render(element)