import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DATA from "../Data";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  const cardItem = (item) => {
    return (
      <div className="col-md-4 mb-5">
        <div
          class="card h-100 p-1 my-1 py-2"
          key={item.id}
          style={{ width: "18rem" }}
        >
          <img
            src={item.img}
            class="card-img-top"
            alt={item.title}
            height="270px"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            {/* <Link to={`/products/${item.id}`} class="btn btn-outline-primary">
              Buy Now
            </Link> */}

            <button
              class="btn btn-outline-primary"
              onClick={() => handleAdd(item)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-2 py-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  justify-content-center">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
