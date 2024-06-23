import React, { useMemo } from 'react';

import '../../../../node_modules/swiper/swiper.min.css';
import '../../../../node_modules/swiper/modules/effect-coverflow.min.css';
import '../../../../node_modules/swiper/modules/navigation.min.css';
import '../../../../node_modules/swiper/modules/pagination.min.css';
import '../../../../node_modules/swiper/modules/autoplay.min.css';

import {
  EffectCoverflow,
  Navigation,
  Autoplay
} from 'swiper/modules';

import { sliderCard } from '../../../constants/mainConst/sliderCard';

import {
  CustomSwiper,
  SwiperCard,
  DiscountPrice,
  NextButton,
  OriginalPrice,
  PrevButton,
  SaleLink,
  SlideContainer,
  SlideImage,
  SlidePrice,
  SlideTitle,
  SliderContainer,
  SliderController
} from '../../../assets/styles/saleStyle';

export const Sale: React.FC = () => {

  const swiperConfig = useMemo(() => ({

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

    modules: [EffectCoverflow, Navigation, Autoplay],

  }), []);

  return (

    <SliderContainer>

      <CustomSwiper {...swiperConfig}>

        {sliderCard.map((item) => (

          <SwiperCard
            key={item.id}
          >

            <SaleLink
              to={item.link}
            >

              <SlideContainer>

                <SlideImage
                  src={item.image}
                  alt={`slide_image_${item.id}`}
                />

                <SlideTitle>

                  {item.title}

                </SlideTitle>

                <SlidePrice>

                  <OriginalPrice>

                    {item.originalPrice}

                  </OriginalPrice>

                  <DiscountPrice>

                    {item.discountPrice}  {' '} грн

                  </DiscountPrice>

                </SlidePrice>

              </SlideContainer>

            </SaleLink>

          </SwiperCard>

        ))}

        <SliderController className="slider-controler">

          <PrevButton className="swiper-button-prev slider-arrow" />
          <NextButton className="swiper-button-next slider-arrow" />

        </SliderController>

      </CustomSwiper>

    </SliderContainer>

  );

};
