import styled from "styled-components";

import { NavLink } from 'react-router-dom';

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  background-color: white;
  box-shadow: none;
`;

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  backface-visibility: hidden;
  background-color: white;
  box-shadow: none;
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%; 
  max-width: 100%;
  background-color: white; 
  box-shadow: none;
`;

export const SwiperCard = styled(SwiperSlide)`
   background-color: white;
   box-shadow: none;
`;

export const SaleLink = styled(NavLink)`
  text-decoration: none;
`;

export const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-color: white;
`;

export const SlideTitle = styled.div`
  font-weight: bold;
  margin-top: 15px;
  color: black;
  font-size: 20px;
`;

export const SlidePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  margin-right: 5px;
  color: black;
`;

export const DiscountPrice = styled.span`
  font-weight: bold;
  color: red;
`;

export const PrevButton = styled.div`
  color: white;

  &.swiper-button-prev:hover {
    color: gray;
  }
`;

export const NextButton = styled.div`
  color: white;

  &.swiper-button-next:hover {
    color: gray;
  }
`;

export const SliderController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
