import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
`;

export const ProductButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #999;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 80px;
`;

export const CategoryButton = styled.button<{ $isActive: boolean }>`
  margin-bottom: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.$isActive ? "#ccc" : "transparent")};
  font-weight: ${(props) => (props.$isActive ? "bold" : "normal")};
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  align-items: center; 
`;

export const LoadMoreButton = styled.button`
  background-color: black;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }

`;

export const BackButton = styled.button`
  background-color: black;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 20px; 
`;

export const Modal = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 140px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
