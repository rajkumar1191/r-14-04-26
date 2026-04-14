import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/*

es6 Modules: The code uses ES6 module syntax to import and export components. For example, it imports React and other necessary modules at the beginning of the file and exports the App component at the end.

Diffing algorithm used
1. Line-by-line comparison: The algorithm compares the two files line by line to identify differences. It checks for added, removed, or modified lines.
2. Contextual analysis: The algorithm considers the context of the changes to determine if they are related or independent. For example, if a line is modified, it checks if the surrounding lines are also changed to understand the scope of the modification.
3. Reconciliation: The algorithm considers the context of the changes to determine if they are related or independent. For example, if a line is modified, it checks if the surrounding lines are also changed to understand the scope of the modification.

Prop Drilling: The code demonstrates prop drilling, where data is passed from a parent component (App) down to child components (TaskList and Task) through props. This allows the child components to access and display the data they need without directly managing it themselves.
parent('raj') -> child -> child -> child -> TaskList -> Task -> TaskDetails('Raj')

To avoid prop drilling, you can use React Context or state management libraries like Redux to manage the state globally and provide it to components without having to pass props through multiple levels of the component tree.
*/
