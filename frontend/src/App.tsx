import "./App.css";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "./components/thems-provider";
import { Toaster } from "sonner";
import { SidebarProvider } from "./components/ui/sidebar";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
