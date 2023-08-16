"use client";
import { ReactNode, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = { slides: { url: string; alt: string }[] };

const PureCarousel = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGoToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        isIntrinsicHeight
        totalSlides={slides.length}
        currentSlide={currentIndex}
      >
        <Slider className="h-[500px]">
          {slides.map((slide, index) => {
            return (
              <Slide index={index}>
                <div>
                  <img src={slide.url} alt={slide.alt}></img>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
      <div className="flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleGoToSlide(index)}
            className="px-4 py-2 text-zinc-500"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PureCarousel;
