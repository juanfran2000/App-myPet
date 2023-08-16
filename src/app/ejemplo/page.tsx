import PureCarousel from "../components/PureCarousel";

export default function ejemplo() {
  const imgCarousel = [
    { url: "carousel-imagenUno.jpg", alt: "imagen carousel 1" },
    { url: "carousel-imagenDos.jpg", alt: "imagen carousel 2" },
    { url: "carousel-imagenTres.jpg", alt: "imagen carousel 3" },
    { url: "carousel-imagenCuatro.jpg", alt: "imagen carousel 4" },
  ];

  return (
    <div>
      <PureCarousel slides={imgCarousel} />
    </div>
  );
}
