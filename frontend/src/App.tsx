import './App.css';
import { AppRoutes } from './routes';
import { ThemeProvider } from './components/thems-provider';
import { Toaster } from 'sonner';
import { SidebarProvider } from './components/ui/sidebar';
import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Theme>
                <SidebarProvider>
                    <AppRoutes />
                </SidebarProvider>
                <Toaster />
            </Theme>
        </ThemeProvider>
    );
}

export default App;
