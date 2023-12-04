import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from "react-dom/client";
// import CodeCell from "./components/code-cell";
import { Provider } from "react-redux";
import { store } from "./state";
// import TextEditor from "./components/text-editor";
import CellList from "./components/cell-list";

const el = document.getElementById("root");

const root = createRoot(el!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

root.render(<App />);
