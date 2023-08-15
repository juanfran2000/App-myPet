import Navbar from "../components/Navbar";
import PureCarousel from "../components/PureCarousel";

export default function ejemplo() {
  const imagenesCarousel = [
    <div>
      <img src="carousel-imagenUno.jpg" alt="Slide 1"></img>
    </div>,
    <div>
      <img src="carousel-imagenDos.jpg" alt="Slide 2"></img>
    </div>,
    <div>
      <img src="carousel-imagenTres.jpg" alt="Slide 3"></img>
    </div>,
    <div>
      <img src="carousel-imagenCuatro.jpg" alt="Slide 4"></img>
    </div>,
  ];

  return (
    <div>
      <PureCarousel slides={imagenesCarousel} />
    </div>
  );
}
