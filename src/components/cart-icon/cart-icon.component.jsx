import { useDispatch, useSelector } from "react-redux";
import {
  CartIconContainer,
  ItemConut,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import React from "react";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemConut className="item-count">{cartCount}</ItemConut>
    </CartIconContainer>
  );
};

export default CartIcon;
