import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="bg-gray-700 text-gray-200 flex flex-col sm:flex-row sm:justify-between items-center space-y-4 p-10  select-none  ">
      <div className="flex space-x-8 sm:space-x-6   md:space-x-8 lg:space-x-10">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <div className="">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          width={100}
          height={50}
          className="cursor-pointer active:brightness-110"
        />
      </div>
    </div>
  );
}
