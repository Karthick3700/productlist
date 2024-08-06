import React, { Fragment } from "react";
import icon from "../assets/images/icon-add-to-cart.svg";

const ProductCard = React.memo(
  ({ product, onAddToCart, onIncrement, onDecrement }) => {
    const { imageUrl, tag, dish, price, count } = product;

    return (
      <Fragment>
        <div className="col-md-6 col-lg-4 d-flex align-items-center justify-content-center d-md-block">
          <div className="product_card ">
            <div className="img_wrapper">
              <div className="img_container">
                <img alt="product image" src={imageUrl} />
              </div>
              {count > 0 ? (
                <Fragment>
                  <div className="cart_counter">
                    <button
                      className="decrement_btn"
                      onClick={() => onDecrement(product.id)}
                    >
                      -
                    </button>
                    <p>{product.count}</p>
                    <button
                      className="increment_btn"
                      onClick={() => onIncrement(product.id)}
                    >
                      +
                    </button>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="cart_btn"
                  >
                    <img src={icon} alt="cart icon" />
                    <span>Add to cart</span>
                  </button>
                </Fragment>
              )}
            </div>
            <div className="product_detail">
              <p className="tag">{tag}</p>
              <p className="dish">{dish}</p>
              <p className="price">${price}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
);

export default ProductCard;
