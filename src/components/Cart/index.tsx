import React, { useEffect, useState } from "react";
import { getData, putData } from "../../WebService/API";
import { toast } from "react-toastify";

interface CartItems {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const userId = Number(localStorage.getItem('userId') || 0);

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items on component mount
  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const response = await getData("cart/get-cart", null, { userId });
      console.log("Cart Data:", response.cart);

    } catch (error) {
      console.error("Failed to fetch cart:", error);
      toast.error("Could not load cart");
    } finally {
      setLoading(false);
    }
  };

  // Update quantity of an item
  const updateQuantity = async (id: number, newQuantity: number) => {
    try {
      const itemToUpdate = cartItems.find(item => item.id === id);
      if (!itemToUpdate) return;

      const updatedItem = {
        ...itemToUpdate,
        quantity: newQuantity
      };

      const response = await putData(`cart/update-cart`, updatedItem);

      if (response.success) {
        toast.success("Cart updated!");
        fetchCartItems(); // Refresh the cart
      } else {
        toast.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Something went wrong");
    }
  };


  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "20px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
