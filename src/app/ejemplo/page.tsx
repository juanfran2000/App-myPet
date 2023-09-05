import PureCarousel from "../components/PureCarousel";

export default function ejemplo() {
  const imgCarousel = [
    { url: "/img-carousel/carousel-imagenUno.jpg", alt: "imagen carousel 1" },
    { url: "/img-carousel/carousel-imagenDos.jpg", alt: "imagen carousel 2" },
    { url: "/img-carousel/carousel-imagenTres.jpg", alt: "imagen carousel 3" },
    {
      url: "/img-carousel/carousel-imagenCuatro.jpg",
      alt: "imagen carousel 4",
    },
  ];

  return (
    <div>
      <PureCarousel slides={imgCarousel} />
    </div>
  );
}
