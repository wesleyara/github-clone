import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  accountname: string;
  setAccountname: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accountname, setAccountname] = useState<string>("");

  return (
    <AuthContext.Provider value={{ accountname, setAccountname }}>
      {children}
    </AuthContext.Provider>
  );
};
