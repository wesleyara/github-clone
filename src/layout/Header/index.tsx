import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaRegBell } from "react-icons/fa";

import { useUser } from "../../hooks/useUser";

export const Header = () => {
  const { user, setUser } = useUser();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
    location.reload();
  };

  if (!user) {
    return <PleaseLogin />;
  }

  return (
    <header className="bg-brand-black text-white px-[32px] py-[16px] text-[14px] h-[62px] flex justify-between">
      <nav className="flex items-center gap-3" title="Search">
        <FaGithub className="text-[32px]" />

        <div className="relative search-input">
          <input
            type="text"
            className={`${
              isSearchOpen
                ? "w-[542px] placeholder-gray-600 bg-gray-100"
                : "w-[272px] placeholder-gray-300 bg-brand-black"
            } border-[1px] border-[#57606A] px-3 py-2 h-[28px] rounded-md `}
            placeholder="Search or jump to..."
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
          />
          <span
            className={`${
              isSearchOpen ? "hidden" : ""
            } p-[2px] border-[1px] border-[#57606A] rounded-sm absolute top-1 right-1 text-[12px] w-5 h-5 flex items-center justify-center text-gray-300`}
          >
            /
          </span>
        </div>

        <ul className="flex gap-3 font-semibold">
          <li>Pull requests</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
      </nav>

      <nav className="flex items-center gap-3">
        <FaRegBell className="cursor-pointer text-[16px]" />

        <span className="flex items-center gap-1">
          <AiOutlinePlus className="text-[14px] cursor-pointer" />
          <AiFillCaretDown className="text-[9px] cursor-pointer" />
        </span>

        <span className="flex items-center gap-1">
          {user ? (
            <Image
              width={20}
              height={20}
              alt="a user image"
              src={user.avatar_url}
              className={`rounded-full cursor-pointer`}
            />
          ) : (
            <CgProfile className="text-[20px]" />
          )}
          <AiFillCaretDown className="text-[9px] cursor-pointer" />
        </span>
      </nav>
    </header>
  );
};

const PleaseLogin = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className={`${
        router.pathname === "/" ? "bg-[#051D47]" : "bg-brand-black"
      } text-white px-[32px] py-[16px] text-[14px] h-[62px] flex justify-between`}
    >
      <nav className="flex items-center gap-3" title="Search">
        <FaGithub className="text-[32px]" />

        <ul className="flex gap-3">
          <li className="flex items-center justify-center gap-1">
            Product{" "}
            <BsChevronDown size={12} className="mt-[2px] text-gray-400" />
          </li>
          <li>Team</li>
          <li>Enterprise</li>
          <li className="flex items-center justify-center gap-1">
            Explore{" "}
            <BsChevronDown size={12} className="mt-[2px] text-gray-400" />
          </li>
          <li>Marketplace</li>
          <li className="flex items-center justify-center gap-1">
            Pricing{" "}
            <BsChevronDown size={12} className="mt-[2px] text-gray-400" />
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-3">
        <div className="relative search-input">
          <input
            type="text"
            className={`${
              isSearchOpen
                ? "placeholder-gray-600 bg-gray-100"
                : "placeholder-gray-300 bg-gray-500"
            } w-[240px] border-[1px] border-[#57606A] px-3 py-2 h-[36px] rounded-md bg-opacity-30`}
            placeholder="Search GitHub"
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
          />
          <span
            className={`${
              isSearchOpen ? "hidden" : ""
            } p-[2px] border-[1px] border-[#57606A] rounded-sm absolute top-2 right-2 text-[12px] w-5 h-5 flex items-center justify-center text-gray-300`}
          >
            /
          </span>
        </div>

        <button onClick={() => router.push("/login")}>Sign In</button>
        <button
          className="border-[1px] border-white p-1 rounded-md"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </button>
      </div>
    </header>
  );
};
