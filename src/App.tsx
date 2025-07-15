import { BrowserRouter } from "react-router-dom";
import { appRoutes } from "./routes";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes/Light";

function App() {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>{appRoutes()}</BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
