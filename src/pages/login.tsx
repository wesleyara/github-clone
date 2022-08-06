import { useRouter } from "next/router";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

import { useAuth } from "../hooks/useAuth";
import { Meta } from "../layout/Meta";

const Login = () => {
  const router = useRouter();
  const { setAccountname } = useAuth();
  const [username, setUsername] = useState("");
  const [nameButton, setNameButton] = useState("Sign in");

  const handleLogin = async () => {
    setNameButton("Signing in...");

    if (username.trim() === "") {
      setNameButton("Sign in");
      return toast.error("Username is required.");
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data.message) {
        setNameButton("Sign in");
        return toast.error("User not found.");
      }
    } catch {
      console.log("Failed to fetch user");
      setNameButton("Sign in");
      return;
    }

    setAccountname(username);
    router.push("/");
  };

  return (
    <>
      <Meta
        title="Sign in to GitHub &#x2022; GitHub"
        description="Faça login para continuar para o GitHub."
      />
      <div className="flex flex-col items-center pt-8 gap-4 w-[308px] mx-auto">
        <div className="flex flex-col items-center gap-6">
          <FaGithub className="text-[48px]" />

          <p className=" text-[24px]">Sign in to GitHub</p>
        </div>

        <div className="flex flex-col bg-[#F6F8FA] border-[1px] border-[#D8DEE4] h-[220px] py-5 px-4 gap-4 rounded-md">
          <span className="flex flex-col gap-2">
            <p className="text-[14px]">Username or email address</p>
            <input
              onChange={e => setUsername(e.target.value)}
              type="text"
              className="py-[2px] px-3 rounded-md bg-white border-[1px] border-[#D8DEE4] focus:bg-white"
            />
          </span>

          <span className="flex flex-col gap-2">
            <p className="text-[14px] flex justify-between">
              Password{" "}
              <span className="text-[12px] text-[#0969DA]">
                Forgot password?
              </span>
            </p>
            <input
              type="password"
              className="py-[2px] px-3 rounded-md bg-white border-[1px] border-[#D8DEE4] focus:bg-white"
            />
          </span>
          <button
            className="bg-[#298E46] text-white rounded-md text-[14px] py-1"
            onClick={handleLogin}
          >
            {nameButton}
          </button>
        </div>

        <div className="flex flex-col gap-20 w-full items-center">
          <div className="border-[1px] text-[14px] rounded-md border-[#D8DEE4] p-4 w-full text-center">
            New to GitHub?{" "}
            <span className="text-[14px] text-[#0969DA]">
              Create an account
            </span>
            .
          </div>

          <ul className="flex gap-3 text-[12px]">
            <li className="text-[#0969DA]">Terms</li>
            <li className="text-[#0969DA]">Privacy</li>
            <li className="text-[#0969DA]">Security</li>
            <li className="text-gray-500">Contact GitHub</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Login;
