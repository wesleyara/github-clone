import Image from "next/image";
import { useEffect, useState } from "react";

import { IRepository, IStarred, UserNavbarProps } from "../../@types";

export const UserNavbar = ({ userName }: UserNavbarProps) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [starred, setStarred] = useState<IStarred[]>([]);

  const requestRepository = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`,
    );
    const data = await response.json();
    setRepositories(data);
  };

  const requestStarred = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userName}/starred`,
    );
    const data = await response.json();
    setStarred(data);
  };

  useEffect(() => {
    if (userName.length > 0) {
      requestRepository();
      requestStarred();
    }
  }, [userName]);

  return (
    <nav>
      <ul className="flex gap-8 justify-center pt-8 font-sans pb-4 text-[14px]">
        <li className="flex items-center justify-center gap-1">
          <Image
            width={22}
            height={22}
            src="/img/icons/book.png"
            alt="a Book"
          />
          Overview
        </li>
        <li className="flex items-center justify-center gap-1">
          <Image
            width={22}
            height={22}
            src="/img/icons/repos.png"
            alt="a Book"
          />
          Repositories{" "}
          <span className="bg-[#dde4eb] text-[12px] rounded-lg px-[6px] py-[1px] flex items-center justify-center">
            {repositories.length}
          </span>
        </li>
        <li className="flex items-center justify-center gap-1">
          <Image
            width={22}
            height={22}
            src="/img/icons/projects.png"
            alt="a Cartesian Plane"
          />
          Projects
        </li>
        <li className="flex items-center justify-center gap-1">
          <Image
            width={22}
            height={22}
            src="/img/icons/package.png"
            alt="a Cube"
          />
          Packages
        </li>
        <li className="flex items-center justify-center gap-1">
          <Image
            width={22}
            height={22}
            src="/img/icons/star.png"
            alt="a Star"
          />
          Stars{" "}
          <span className="bg-[#dde4eb] text-[12px] rounded-lg px-[6px] py-[1px] flex items-center justify-center">
            {starred.length}
          </span>
        </li>
      </ul>
      <hr />
    </nav>
  );
};
