import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import { Header } from "../Header";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const { accountname, setAccountname } = useAuth();
  const { setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setAccountname(localStorage.getItem("userName")!);
    }

    if (localStorage.getItem("userData")) {
      setUser(JSON.parse(localStorage.getItem("userData")!));
    }
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${accountname}`,
      );
      const data = await response.json();

      setUser(data);

      localStorage.setItem("userData", JSON.stringify(data));
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
