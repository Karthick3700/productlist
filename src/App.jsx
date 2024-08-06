import React, { useCallback, useState } from "react";
import waffle from "./assets/images/image-waffle-desktop.jpg";
import brulee from "./assets/images/image-creme-brulee-desktop.jpg";
import macaron from "./assets/images/image-macaron-desktop.jpg";
import tiramisu from "./assets/images/image-macaron-desktop.jpg";
import baklava from "./assets/images/image-baklava-desktop.jpg";
import pie from "./assets/images/image-meringue-desktop.jpg";
import cake from "./assets/images/image-cake-desktop.jpg";
import brownie from "./assets/images/image-brownie-desktop.jpg";
import pannacotta from "./assets/images/image-panna-cotta-desktop.jpg";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Popup from "./components/Popup";

const data = [
  {
    id: 1,
    tag: "Waffle",
    dish: "Waffle with Berries",
    price: "6.50",
    imageUrl: waffle,
  },
  {
    id: 2,
    tag: "Brulee Creme",
    dish: "Vanilla Bean Creme Brulee",
    price: "7.00",
    imageUrl: brulee,
  },
  {
    id: 3,
    tag: "Macaron",
    dish: "Macaron Mix of Five",
    price: "6.50",
    imageUrl: macaron,
  },
  {
    id: 4,
    tag: "Tiramisu",
    dish: "Classic Tiramisu",
    price: "5.50",
    imageUrl: tiramisu,
  },
  {
    id: 5,
    tag: "Baklava",
    dish: "Pistachio Baklava",
    price: "4.00",
    imageUrl: baklava,
  },
  {
    id: 6,
    tag: "Pie",
    dish: "Lemon Meringue Pie",
    price: "5.00",
    imageUrl: pie,
  },
  {
    id: 7,
    tag: "Cake",
    dish: "Red Velvet Cake",
    price: "4.50",
    imageUrl: cake,
  },
  {
    id: 8,
    tag: "Brownie",
    dish: "Salted Caramel Brownie",
    price: "5.50",
    imageUrl: brownie,
  },
  {
    id: 9,
    tag: "Panna Cotta",
    dish: "Vanilla Panna Cotta",
    price: "6.50",
    imageUrl: pannacotta,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const showModal = () => {
    setModalShow(true);
  };

  const handleAddToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  }, []);
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem.count === 1) {
        return prevItems.filter((item) => item.id !== productId);
      } else {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        );
      }
    });
  };

  const handleIncrement = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const handleDecrement = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  }, []);

  const clearCartItems = () => {
    setCartItems([]);
    setModalShow(false);
  };

  return (
    <main>
      <div className="container py-5 px-5">
        <div className="row gy-5">
          <div className="layout_wrap col-lg-9 col-md-8">
            <h2>Desserts</h2>
            <div className="products_wrapper row gy-5">
              {data.map((product) => {
                const cartItem = cartItems.find((item) => item.id === product.id);
                const count = cartItem ? cartItem.count : 0;
                return (
                  <ProductCard
                    product={{ ...product, count }}
                    key={product.id}
                    onAddToCart={handleAddToCart}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <Cart
              cartItems={cartItems}
              onRemoveToCart={handleRemoveFromCart}
              modalClick={showModal}
            />
          </div>
        </div>
        <Popup
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            setCartItems([]);
          }}
          cartItems={cartItems}
          clearCartItems={clearCartItems}
        />
        <span className="attribution gap-2">
          Coded by{" "}
          <a
            href="https://karthickkn-portfolio.vercel.app/"
            className="text-decoration-none"
          >
            {" "}
            Karthick KN
          </a>
        </span>
      </div>
    </main>
  );
}

export default App;
