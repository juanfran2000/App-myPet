import React from "react";
import PureCarousel from "../components/PureCarousel";

export default function Ejemplo() {
  return (
    <div>
      <h1 className="text-2xl"> Esta es nuestra pagina de Ejemplo</h1>
      <PureCarousel
        slides={[
          <div className=" bg-zinc-500 h-40">I am the first Slide.</div>,
          <div className=" bg-red-500 h-40">I am the second Slide.</div>,
          <div className=" bg-blue-500 h-40">I am the third Slide.</div>,
        ]}
      />
    </div>
  );
}
