import Image from "next/image";
import { useState } from "react";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaGithub, FaRegBell } from "react-icons/fa";

export const Header = () => {
  const [searchElement, setSearchElement] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
          <Image
            width={20}
            height={20}
            alt="a user image"
            src={`/img/user.jpeg`}
            className={`rounded-full cursor-pointer`}
          />
          <AiFillCaretDown className="text-[9px] cursor-pointer" />
        </span>
      </nav>
    </header>
  );
};
