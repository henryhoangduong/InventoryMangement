import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { apiClient } from '../api/api';
type AUTHTYPE = {
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuth: boolean;
};

const AuthContext = createContext<AUTHTYPE>({} as AUTHTYPE);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean>(true);
    const nav = useNavigate();

    const login = async (email: string, password: string) => {
        toast.loading('authenticating.....', {
            id: 'login',
        });
        try {
            const res = await apiClient.post('/api/login', {
                email: email,
                password: password,
            });
            toast.success('Successful login', {
                id: 'login',
            });
            if (res.data.access_token) {
                localStorage.setItem('access_token', res.data.access_token);
            } else {
                toast.error('Login failed. Please try again.', {
                    id: 'login',
                });
            }
            setIsAuth(true);
            nav('/dashboard');
        } catch (error) {
            toast.error('Login failed. Please try again.', {
                id: 'login',
            });
        }
    };
    const logout = () => {
        setIsAuth(false);
    };
    return (
        <AuthContext.Provider value={{ login, logout, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    // Throw an error if useAuth is used outside of AuthContextProvider
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }

    return context;
};
