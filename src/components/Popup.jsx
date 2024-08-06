import React, { Fragment, useCallback } from "react";
import { Modal } from "react-bootstrap";
import success from "../assets/images/icon-order-confirmed.svg";

const Popup = ({ show, onHide, cartItems, clearCartItems }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal_custombody">
        <div className="d-flex algin-items-start justify-content-start gap-4">
          <img alt="success-icon" width={30} height={30} src={success} />
          <p className="confirm-text">Order Confirmed</p>
        </div>

        <div className="d-flex flex-column gap-4 justify-content-start">
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex flex-column gap-3">
              <div className="d-flex w-100 justify-content-between gap-4 align-items-center">
                <div>
                  <img
                    w={40}
                    height={40}
                    alt="dish image"
                    src={item.imageUrl}
                  />
                </div>
                <div className="d-flex flex-column align-items-start gap-2 popup-cart">
                  <h3 className="dish">{item.dish}</h3>
                  <div className="d-flex flex align-items-center gap-3">
                    <span className="cart_counts">{item.count}x</span>
                    <span className="cart_price">@ ${item.price}</span>
                  </div>
                </div>
                <div>
                  
                  <span className="cart_total">
                    {(item.count * item.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="order_btn"
          onClick={() => {
            clearCartItems();
          }}
        >
          Start New Order...
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
