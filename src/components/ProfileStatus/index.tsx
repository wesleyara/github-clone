import Image from "next/image";

import { ProfileStatusProps } from "../../@types";

export const ProfileStatus = ({ userData }: ProfileStatusProps) => {
  return (
    <aside className="-mt-10">
      <div className="border-[2px] border-[#dde4eb] w-[300px] h-[300px] rounded-full">
        <Image
          width={300}
          height={300}
          src={userData.avatar_url}
          alt="Profile Image"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col gap-3">
        <span>
          <p className="font-medium text-[24px]">{userData.name}</p>
          <p className="font-thin text-[20px]">{userData.login}</p>
        </span>

        <p className="text-[16px]">{userData.bio}</p>

        <button className="w-full bg-[#F3F4F6] font-semibold text-[14px] border-[1px] border-[#a7b0bd] rounded-md py-[6px]">
          Edit profile
        </button>

        <span className="flex items-center gap-1 font-thin text-[14px]">
          <Image
            width={20}
            height={20}
            src={"/img/icons/peoples.png"}
            alt="a peoples icon"
          />
          <span>
            <b className="font-semibold">{122}</b> followers
          </span>
          &#x2022;
          <span>
            <b className="font-semibold">{122}</b> following
          </span>
        </span>
      </div>
    </aside>
  );
};
