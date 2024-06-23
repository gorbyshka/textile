import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: none !important; 
`;

export const PrevButton = styled.div`

  &.swiper-button-prev {
    color: black; 

    &:hover {
      color: #e0e0e0; 
    }

  }

`;

export const NextButton = styled.div`

  &.swiper-button-next {
    color: white; 

    &:hover {
      color: black; 
    }

  }

`;

export const PaginationBlock = styled.div`
   
   &.swiper-pagination {
    color: black; 
  }

  .swiper-pagination-bullet {
     background-color: white; 

     &:hover {
      background-color: gray; 
    }

  }

`;

export const SliderController = styled.div``;
