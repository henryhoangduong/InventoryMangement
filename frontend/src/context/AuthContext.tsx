import { createContext, ReactNode, useContext, useState } from "react";

type AUTHTYPE = {
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuth: boolean;
};

const AuthContext = createContext<AUTHTYPE>({} as AUTHTYPE);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const login = async (email: string, password: string) => {};
  const logout = () => {};
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
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return context;
};
