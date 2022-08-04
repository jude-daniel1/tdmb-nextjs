import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const NEW_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <Image
        src={BASE_URL + result.backdrop_path}
        layout="responsive"
        width={200}
        height={100}
      />
      <div className="">
        <p className="truncate">{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>
          {result.release_date || result.first_air_date}

          <ThumbUpIcon className="h-5" />

          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
