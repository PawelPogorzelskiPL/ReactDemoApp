import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
// import CodeCell from "./components/code-cell";
import { Provider } from "react-redux";
import { store } from "./state";
import TextEditor from "./components/text-editor";

const el = document.getElementById("root");

const root = createRoot(el!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

root.render(<App />);
