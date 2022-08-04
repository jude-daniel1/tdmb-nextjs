import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center space-x-5 bg-gray-600 text-gray-300 select-none py-6">
      {Object.entries(requests).map(([key, { title }]) => (
        <p
          key={key}
          className="text-xl lg:text-2xl cursor-pointer hover:text-white active:text-red-400"
          onClick={() => router.push(`?genre=${key}`)}
        >
          {title}
        </p>
      ))}
    </div>
  );
}
