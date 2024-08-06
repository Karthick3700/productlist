import React, { Fragment, useCallback } from "react";
import emptycart from "../assets/images/illustration-empty-cart.svg";
import close from "../assets/images/icon-remove-item.svg";

const Cart = React.memo(({ cartItems, modalClick, onRemoveToCart }) => {


  const orderTotal = useCallback(() => {
    return cartItems
      .reduce((acc, item) => acc + item.count * item.price, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="cart_list">
      <h2 className="cart_title">
        Your Cart ({cartItems.reduce((acc, item) => acc + item.count, 0)})
      </h2>
      <div className="d-flex flex-column justify-content-between  my-4 gap-5 h-400">
        {cartItems.length === 0 ? (
          <Fragment>
            <div className="empty_cart">
              <img src={emptycart} alt="Empty cart" />
              <p>Your added items will appear here</p>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="d-flex flex-column gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex flex-column gap-3">
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="d-flex flex-column gap-2">
                      <h3 className="dish">{item.dish}</h3>
                      <div className="d-flex flex align-items-center gap-3">
                        <span className="cart_counts">{item.count}x</span>
                        <span className="cart_price">@ ${item.price}</span>
                        <span className="cart_total">
                          {(item.count * item.price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      className="cartremove_btn"
                      onClick={() => {
                        onRemoveToCart(item.id);
                      }}
                    >
                      <img src={close} alt="close icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        )}
        {cartItems.length > 0 ? (
          <div className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-total">Order Total</p>
              <p className="text-totalprice">$ {orderTotal()}</p>
            </div>
            <button className="order_btn" onClick={modalClick}>
              Confrim Order
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});

export default Cart;
