import { BrowserRouter } from "react-router-dom";
import { appRoutes } from "./routes";
import "./App.css";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>{appRoutes()}</BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
