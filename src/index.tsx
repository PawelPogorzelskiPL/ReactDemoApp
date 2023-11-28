import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
// import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";

const el = document.getElementById("root");

const root = createRoot(el!);

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

root.render(<App />);
