import React, { useMemo } from 'react';

import '../../../../node_modules/swiper/swiper.min.css';
import '../../../../node_modules/swiper/modules/effect-coverflow.min.css';
import '../../../../node_modules/swiper/modules/navigation.min.css';
import '../../../../node_modules/swiper/modules/pagination.min.css';
import '../../../../node_modules/swiper/modules/autoplay.min.css';

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay
} from 'swiper/modules';

import {
  SliderContainer,
  SlideContainer,
  SlideImage,
  PrevButton,
  NextButton,
  PaginationBlock,
  SliderController
} from "../../../assets/styles/sliderStyle";

import { images } from '../../../constants/mainConst/images';

export const Slider: React.FC = () => {

  const swiperConfig = useMemo(() => ({

    effect: "flip",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

    modules: [EffectFlip, Pagination, Navigation, Autoplay],

  }), []);

  const memoizedImages = useMemo(() => images, []);

  return (
    <SliderContainer>

      <Swiper {...swiperConfig}>

        {memoizedImages.map((image, index) => (

          <SwiperSlide key={index}>

            <SlideContainer>

              <SlideImage src={image} alt={`slide_image_${index}`} />

            </SlideContainer>

          </SwiperSlide>

        ))}

        <SliderController className="slider-controler">

          <PrevButton className="swiper-button-prev slider-arrow" />
          <NextButton className="swiper-button-next slider-arrow" />
          <PaginationBlock className="swiper-pagination" />

        </SliderController>

      </Swiper>

    </SliderContainer>

  );

};
