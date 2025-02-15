import './App.css';
import { AppRoutes } from './routes';
import { ThemeProvider } from './components/thems-provider';
import { Toaster } from 'sonner';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Theme>
                <SidebarProvider>
                    <SidebarTrigger />
                    <AppRoutes />
                </SidebarProvider>
                <Toaster />
            </Theme>
        </ThemeProvider>
    );
}

export default App;
