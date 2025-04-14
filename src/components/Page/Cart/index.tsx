import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { deleteData, getData, putData } from "../../../WebService/API";
import { toast } from "react-toastify";

interface CartItems {
    productId: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const userId = Number(localStorage.getItem('userId') || 0);

const Cart = () => {

    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    const fetchCartItems = async () => {
        setLoading(true);
        try {
            const response = await getData("cart/get-cart", null, { userId });
            console.log("Cart Data:", response.cart);

            const fixedCartItems = response.cart.map((item: any) => ({
                ...item,
                price: parseFloat(item.price.replace(/[^0-9.]/g, "")), // Remove non-numeric chars
                quantity: Number(item.quantity),
            }));

            setCartItems(fixedCartItems);

        } catch (error) {
            console.error("Failed to fetch cart:", error);
            toast.error("Could not load cart");
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (productId: number, newQuantity: number) => {
        try {
            await putData(`cart/update-cart/${productId}`, {
                userId,
                quantity: newQuantity,
            });
            setCartItems(prev =>
                prev.map(item =>
                    item.productId === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        } catch (error) {
            console.error("Failed to update quantity:", error);
            toast.error("Could not update quantity");
        }
    };


    const handleIncrement = (id: number) => {
        const item = cartItems.find(item => item.productId === id);
        if (item) {
            const newQty = item.quantity + 1;
            updateQuantity(id, newQty);
            setCartItems(prev => prev.map(i => i.productId === id ? { ...i, quantity: newQty } : i));
        }
    };

    const handleDecrement = (id: number) => {
        const item = cartItems.find(item => item.productId === id);
        if (item && item.quantity > 1) {
            const newQty = item.quantity - 1;
            updateQuantity(id, newQty);
            setCartItems(prev => prev.map(i => i.productId === id ? { ...i, quantity: newQty } : i));
        }
    };

    const handleRemove = async (productId: number) => {
        try {
            await deleteData(`cart/delete-from-cart/${productId}`);
            // Update cart items in the state by removing the item with the matching productId
            setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
            toast.success("Item removed from the cart");
        } catch (error) {
            console.error("Failed to remove item:", error);
            toast.error("Could not remove item from the cart");
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => {
            const price = Number(item.price); // Ensure price is a number
            const quantity = Number(item.quantity); // Ensure quantity is a number
            return acc + (price * quantity);
        }, 0);
    };

    const calculateShipping = () => {
        // For now, using a flat shipping rate
        return 10.00; // Example flat shipping cost
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shipping = calculateShipping();
        return subtotal + shipping;
    };

    useEffect(() => {
        fetchCartItems();
    }, [])

    return (
        <>
            <Header />
            <SinglePageHeader />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((data) => (
                                        <tr key={data.productId}>
                                            <th>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={data.image}
                                                        className="img-fluid me-5 rounded-circle"
                                                        style={{ width: 80, height: 80 }}
                                                        alt={data.name}
                                                    />
                                                </div>
                                            </th>
                                            <td>
                                                <p className="mb-0 mt-4">{data.name}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">${data.price}</p>
                                            </td>
                                            <td>
                                                <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border"
                                                            onClick={() => handleDecrement(data.productId)}>
                                                            <i className="fa fa-minus" />
                                                        </button>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm text-center border-0"
                                                        value={data.quantity}
                                                        readOnly
                                                    />
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border"
                                                            onClick={() => handleIncrement(data.productId)}
                                                        >
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>${(data.price * data.quantity).toFixed(2)}</td>
                                            <td>
                                                <button className="btn btn-md rounded-circle bg-light border mt-4"
                                                    onClick={() => handleRemove(data.productId)}>
                                                    <i className="fa fa-times text-danger" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="mt-5">
                        <input
                            type="text"
                            className="border-0 border-bottom rounded me-5 py-3 mb-4"
                            placeholder="Coupon Code"
                        />
                        <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
                            Apply Coupon
                        </button>
                    </div> */}
                    <div className="row g-4 justify-content-end">
                        <div className="col-8" />
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">
                                        Cart <span className="fw-normal">Total</span>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Subtotal:</h5>
                                        <p className="mb-0">${calculateSubtotal().toFixed(2)}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Shipping</h5>
                                        <div className="">
                                        <p className="mb-0">${calculateShipping().toFixed(2)}</p>
                                        </div>
                                    </div>
                                    {/* <p className="mb-0 text-end">Shipping to Ukraine.</p> */}
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 pe-4">${calculateTotal().toFixed(2)}</p>
                                </div>
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                                    type="button">
                                    Proceed Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
