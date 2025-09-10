import React from "react";
import CardFlip from "../ui/card-flip-sites";
import CardFlipSites from "../ui/card-flip-sites";
import CardFlipLandingPage from "../ui/card-flip-landigPage";
import { GridBackground } from "../ui/grid-background";
import CardFlipBackEnd from "../ui/card-flip-back-end";

export default function CardServices() {
  return (
    <section className="container overflow-hidden  md:-rotate-2  mx-auto">
      <div className="h-auto shadow-md rounded-xl  p-8   bg-muted">
        <div className="md:rotate-2">
          <h1 className="text-primary font-serif pt-6 text-2xl">
            Serviços Especializados
          </h1>
          <span className=" text-lg w-full block pt-3 leading-snug">
            Transformando suas ideias em experiências digitais excepcionais com
            soluções personalizadas para suas necessidades.
          </span>
          <div className="pt-8 justify-around w-full grid grid-cols-1 md:flex gap-8">
            <CardFlipSites />
            <CardFlipLandingPage />
            <CardFlipBackEnd />
          </div>
        </div>
      </div>
    </section>
  );
}
