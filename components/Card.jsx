import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const NEW_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="p-3 hover:text-white cursor-pointer active:text-red-400 hover:scale-105 transition-all duration-300">
      <Image
        src={BASE_URL + result.backdrop_path}
        layout="responsive"
        width={200}
        height={100}
        alt={result.title}
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}

          <ThumbUpIcon className="h-5 ml-3 mr-1" />

          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
