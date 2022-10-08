import { Dispatch, SetStateAction } from "react";

import { IUser } from "../@types";

const useGet = () => {
  const getUser = async (
    accountname: string,
    setUser: Dispatch<SetStateAction<IUser | undefined>>,
  ) => {
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

  return { getUser };
};

export default useGet;
