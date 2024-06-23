import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  gap: 15px; 
  margin-top: 60px;
`;

export  const Block = styled.div`
  display: flex;
  gap: 15px; 
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ImageContent = styled.div`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: relative;
`;

export const ImageText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 32px;
  color: white;
`;
