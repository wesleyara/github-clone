import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import { Header } from "../Header";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const { accountname } = useAuth();
  const { setUser } = useUser();
  const router = useRouter();

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${accountname}`,
      );
      const data = await response.json();

      setUser(data);
    } catch {
      console.log("Failed to fetch user");
    }
  };

  useEffect(() => {
    if (accountname.length > 0) {
      getUser();
    }
  }, [accountname]);

  return (
    <div>
      {router.pathname !== "/login" && <Header />}
      {children}
    </div>
  );
};
