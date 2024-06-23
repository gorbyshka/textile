import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  CategoriesContainer,
  CategoryButton,
  ProductsContainer,
  LoadMoreButton,
  BackButton,
  ButtonsContainer,
} from "../assets/styles/pagesStyle";

import { categories } from "../constants/pageConst/categories";
import { FabricCard } from "./fabricCard";
import { PageProps } from "../types/pagesType/pageProps";

export const Page: React.FC<PageProps> = React.memo(({ fabric, nameTitle }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [showBackButton, setShowBackButton] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(-1);

  const cardsPerPage = 15;

  useEffect(() => {
    document.title = nameTitle + " ткани";
    return () => {
      document.title = "Textile Pro";
    };
  }, [nameTitle]);

  const handleOrderClick = (index: number) => {
    setSelectedProductIndex(index);
  };

  const handleCancelOrder = () => {
    setSelectedProductIndex(-1); 
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
    setShowBackButton(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setShowBackButton(true);
  };

  const handleGoBack = () => {
    setPage((prevPage) => prevPage - 1);
    if (page === 2) setShowBackButton(false);
  };

  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? fabric.filter((product) => product.category === selectedCategory)
      : fabric;
  }, [selectedCategory, fabric]);

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = page * cardsPerPage;
  const visibleProductSlice = filteredProducts.slice(startIndex, endIndex);

  return (
    <Container>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryButton
            key={category.value}
            $isActive={selectedCategory === category.value}
            onClick={() => handleCategorySelect(category.value)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesContainer>

      <ProductsContainer>
        {visibleProductSlice.map((product, index) => (
          <FabricCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onClickOrder={handleOrderClick}
            isOpen={selectedProductIndex === index}
            index={index}
            onCancelOrder={handleCancelOrder}
          />
        ))}

        <ButtonsContainer>
          {page > 1 && showBackButton && (
            <BackButton onClick={handleGoBack}>Назад</BackButton>
          )}

          {filteredProducts.length > endIndex && (
            <LoadMoreButton onClick={handleLoadMore}>Далее</LoadMoreButton>
          )}
        </ButtonsContainer>
      </ProductsContainer>
    </Container>
  );
});
