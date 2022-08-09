import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { IUser } from "../../@types/user";
import { Meta } from "../../layout/Meta";

const User = () => {
  const router = useRouter();
  const { user } = router.query as any;

  const [userData, setUserData] = useState<IUser>();

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      setUserData(data);
    } catch {
      console.log("Failed to fetch user");
    }
  };

  const [tab, setTab] = useState("");

  const tabChange = () => {
    userData === undefined
      ? setTab("")
      : userData.name === null
      ? setTab(`${user}`)
      : setTab(`${user} (${userData.name})`);
  };

  useEffect(() => {
    if (user) {
      tabChange();
    }
  }, [user, userData]);

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  return (
    <>
      <Meta
        title={`${tab}`}
        description="Faça login para continuar para o GitHub."
      />
      <h1>{user}</h1>
    </>
  );
};

export default User;
