"use client";

import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = {};

const PureCarousel = (props: Props) => {
  return (
    <CarouselProvider
      naturalSlideWidth={0}
      naturalSlideHeight={0}
      isIntrinsicHeight
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <div className=" bg-zinc-500 h-40">I am the first Slide.</div>
        </Slide>
        <Slide index={1}>
          <div className=" bg-red-500 h-40">I am the second Slide.</div>
        </Slide>
        <Slide index={2}>
          <div className=" bg-blue-500 h-40">I am the third Slide.</div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default PureCarousel;
