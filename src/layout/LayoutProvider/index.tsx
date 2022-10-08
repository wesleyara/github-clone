import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../@types/redux";
import { setAccount } from "../../redux/authSlice";
import { setUser } from "../../redux/userSlice";
import { Header } from "../Header";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const accountname = useSelector((state: IState) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      dispatch(setAccount({ name: localStorage.getItem("userName") }));
    }

    if (localStorage.getItem("userData")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("userData")!)));
    }
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${accountname.name}`,
      );
      const data = await response.json();

      dispatch(setUser(data));

      localStorage.setItem("userData", JSON.stringify(data));
    } catch {
      console.log("Failed to fetch user");
    }
  };

  useEffect(() => {
    if (accountname.isLogged === true) {
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
