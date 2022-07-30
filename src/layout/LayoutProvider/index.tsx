import { ReactNode } from "react";

import { Header } from "../Header";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
