import React from "react"
import { useAppDispatch } from "../../../../../app/hooks"
import { addItem } from "../../../../../features/cart/cartSlice"
// import { addProductById } from "../../../../../features/cart/cartSlice"

const ProductItem: React.FC<{ item: any }> = ({ item }) => {
  const defaultImage = "https://via.placeholder.com/150"
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      dispatch(addItem({
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: 1,
        img: item.thumbnail
      }))
    } catch (err) {
      console.log(err)
    }
    // dispatch(addProductById(item.id))
  }

  return (
    <div>
    {/* <div className="col-md-6 col-lg-6 col-xl-4">
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <a href={`/product/${item.id}`}>
            <img
              src={item.thumbnail || defaultImage} // Use default image if no image provided
              className="img-fluid w-100 rounded-top"
              alt={item.title || "Product image"} // Set alt text based on name
            />
          </a>
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: 10, left: 10 }}
        >
          {item.category}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4><a href={`/product/${item.id}`}>{item.title}</a></h4>
          <p>
            {item.description && item.description.length > 50
              ? `${item.description.substring(0, 50)}...`
              : item.description}
          </p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
            <a
              href={`/product/${item.id}`}
              className="btn border border-secondary rounded-pill px-3 text-primary"
              onClick={handleAddToCart}
            >
              <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
            </a>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default ProductItem
