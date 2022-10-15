import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  //we get a state of addItems
  //write the name of file not the function
  const items = useSelector((state) => state.cart);
  return (
    <>
      <Link to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart
       {items.length}
      </Link>
    </>
  );
};

export default CartBtn;
