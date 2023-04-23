import { useContext } from "react";

import {CartIconContainer, ItemConut, ShoppingIcon}from "./cart-icon.styles.jsx";

import React from "react";
import { CartContext } from "../../contexts/cart-context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"  />
      <ItemConut className="item-count">{cartCount}</ItemConut>
    </CartIconContainer>
  );
};

export default CartIcon;
