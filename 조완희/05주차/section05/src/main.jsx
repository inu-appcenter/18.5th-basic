import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const Hello = () => {
  return <div>안녕하세요!</div>;
};

createRoot(document.getElementById("root")).render(<App />);
