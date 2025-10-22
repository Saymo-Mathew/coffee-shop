import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const products = [
    {
      id: "espresso",
      name: "Espresso Roast",
      price: 120,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/960px-A_small_cup_of_coffee.JPG",
      description: "Full-bodied with a bold, smoky flavor. Perfect for your morning espresso shot."
    },
    {
      id: "house",
      name: "House Blend",
      price: 130,
      image: "https://etimg.etb2bimg.com/photo/113047605.cms",
      description: "Smooth, balanced, and aromatic. A customer favorite for a reason."
    },
    {
      id: "coldbrew",
      name: "Cold Brew Pack",
      price: 120,
      image: "https://corkframes.com/cdn/shop/articles/Corkframes_Coffee_Guide_520x500_422ebe38-4cfa-42b5-a266-b9bfecabaf30.jpg?v=1734598727",
      description: "Low acidity with notes of chocolate. Perfect for iced coffee lovers."
    },
    {
      id: "golden",
      name: "Golden Roast",
      price: 140,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      description: "Subtle citrus with honey undertones. Limited edition blend."
    },
    {
      id: "mocha",
      name: "Mocha Delight",
      price: 150,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      description: "Rich chocolate and coffee blend. Perfect for dessert lovers."
    },
    {
      id: "caramel",
      name: "Caramel Macchiato",
      price: 160,
      image: "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
      description: "Sweet caramel with a hint of vanilla. A customer favorite."
    },
    {
      id: "vanilla",
      name: "Vanilla Latte",
      price: 135,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      description: "Smooth vanilla with rich espresso. Perfect for any time of day."
    },
    {
      id: "french",
      name: "French Press",
      price: 125,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
      description: "Traditional brewing method. Full-bodied and aromatic."
    },
    {
      id: "americano",
      name: "Americano",
      price: 110,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      description: "Classic espresso with hot water. Simple and satisfying."
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      price: 130,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
      description: "Perfect balance of espresso, steamed milk, and foam."
    },
    {
      id: "flatwhite",
      name: "Flat White",
      price: 140,
      image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.mocha_.latte-6715-768x1152.jpg",
      description: "Smooth microfoam with rich espresso. Australian classic."
    },
    {
      id: "irish",
      name: "Irish Coffee",
      price: 180,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
      description: "Coffee with Irish whiskey and cream. Perfect for special occasions."
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartTotal(cartTotal + product.price);
  };

  return (
    <div className="products">
      <h2>Our Complete Menu</h2>
      <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--olive)' }}>
        Discover our carefully curated selection of premium coffee blends
      </p>
      
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>P{product.price}.00</span>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
