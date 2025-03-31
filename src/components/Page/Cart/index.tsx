import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import vegetableitem3 from "../../../assets/images/vegetable-item-3.png"
import vegetableitem5 from "../../../assets/images/vegetable-item-5.jpg"
import vegetableitem2 from "../../../assets/images/vegetable-item-2.jpg"

const initialItems = [
  { id: 1000, name: "Big Banana", price: 2.99, quantity: 1, img: vegetableitem3 },
  { id: 2000, name: "Potatoes", price: 2.99, quantity: 1, img: vegetableitem5 },
  { id: 3000, name: "Awesome Broccoli", price: 2.99, quantity: 1, img: vegetableitem2 }
]
const Cart = () => {
  const dispatch = useAppDispatch()
  //list_items.map(item => dispatch(addItem(item)))
  //dispatch(addItem(list_items[0]))
  const { items, shipping } = useAppSelector((state: RootState) => state.cart)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const total = subtotal + shipping
  const [initi, setIniti] = useState(false)
  useEffect(() => {
    if (!initi) {
      console.log("initialItems")
      //  dispatch(initItems(initialItems))
      setIniti(true)
    }
  }, [initi])
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
              {items.map(item => (
                <tr key={item.id}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.img}
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: 80, height: 80 }}
                        alt={item.name}
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">{item.name}</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">${item.price.toFixed(2)}</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: 100 }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border"
                                onClick={() => dispatch(decrementQuantity(item.id))}>
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        value={item.quantity}
                        readOnly
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border"
                                onClick={() => dispatch(incrementQuantity(item.id))}>
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4"
                            onClick={() => dispatch(removeItem(item.id))}>
                      <i className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
            />
            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
              Apply Coupon
            </button>
          </div>
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
                    <p className="mb-0">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div className="">
                      <p className="mb-0">Flat rate: ${shipping.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">${total.toFixed(2)}</p>
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
