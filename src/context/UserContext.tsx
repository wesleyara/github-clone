import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { IUser } from "../@types/user";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
