import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import CodeCell from "./components/code-cell";

const el = document.getElementById("root");

const root = createRoot(el!);

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

root.render(<App />);
