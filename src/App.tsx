import { BrowserRouter } from "react-router-dom";
import { appRoutes } from "./routes";
import "./App.css";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { SideMenu } from "./shared/components/side-menu/SideMenu";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <SideMenu>{appRoutes()}</SideMenu>
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
