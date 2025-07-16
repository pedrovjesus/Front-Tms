import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import "./App.css";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { SideMenu } from "./shared/components/side-menu/SideMenu";
import { DrawerProvider } from "./shared/contexts/DrawerContext";

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideMenu>
            <AppRoutes />
          </SideMenu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
