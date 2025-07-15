import { BrowserRouter } from "react-router-dom";
import { appRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {appRoutes()}
      </BrowserRouter>
    </>
  );
}

export default App;
