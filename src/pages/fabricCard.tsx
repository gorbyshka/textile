import React, { useEffect, useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton
} from "../assets/styles/pagesStyle";

import { FabricCardProps } from "../types/pagesType/fabricProps";
import { OrderForm } from "./orderForm";

export const FabricCard: React.FC<FabricCardProps> = React.memo(
  ({ image, name, price, onClickOrder, isOpen, index, onCancelOrder }) => { 
    
    const [isOrdering, setIsOrdering] = useState(false);

    const handleOrderClick = (index: number) => {
      onClickOrder(index);
      setIsOrdering(true);
    };

    const handleOrderCancel = () => {
      onCancelOrder(); 
      setIsOrdering(false);
    };

    useEffect(() => {

      if (!isOpen) setIsOrdering(false);
      
    }, [isOpen]);

    return (
      <ProductCard>
        <ProductImage src={image} alt={name} />
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>{price} грн</ProductPrice>
        {isOpen ? (
          <OrderForm
            onClose={handleOrderCancel}
            isOrdering={isOrdering}
          />
        ) : (
          <ProductButton onClick={() => handleOrderClick(index)}>
            Заказать
          </ProductButton>
        )}
      </ProductCard>
    );
  }
);