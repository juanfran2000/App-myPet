import PureCarousel from "../components/PureCarousel";

export default function ejemplo() {
  return (
    <div>
      <PureCarousel
        slides={[
          <div>
            <img src="carousel-imagenUno.jpg"></img>
          </div>,
          <div>
            <img src="carousel-imagenDos.jpg"></img>
          </div>,
          <div>
            <img src="carousel-imagenTres.jpg"></img>
          </div>,
          <div>
            <img src="carousel-imagenCuatro.jpg"></img>
          </div>,
        ]}
      />
    </div>
  );
}
