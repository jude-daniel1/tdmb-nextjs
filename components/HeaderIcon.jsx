import React from "react";

export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-white active:text-red-400 ">
      <Icon className="h-8" />
      <p>{title}</p>
    </div>
  );
}
