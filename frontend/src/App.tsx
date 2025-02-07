import "./App.css";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "./components/thems-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
