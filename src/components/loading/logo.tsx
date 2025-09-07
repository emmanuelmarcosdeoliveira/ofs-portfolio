"use client";

import Image from "next/image";

export function Logo() {
  return (
    <>
      <h1 className="text-center font-serif text-primary text-8xl">OFS</h1>

      {/* <Image
        className="ml-4 fill-black"
        src={"/ofs-light.svg"}
        alt="Logo entrada"
        width={120}
        height={120}
      /> */}
      <span className="ml-4 dark:text-white font-serif text-md text-center font-semibold">
        OLIVERAFULLSTACK
      </span>
    </>
  );
}
