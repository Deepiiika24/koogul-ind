import React, { useEffect } from "react"
import type { RootState } from "../../../../app/store"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import ProductItem from "./ProductItem"
import Pagination from "./Pagination"
import { fetchProduct, searchProducts, setPage, setSearchQuery } from "../../../../features/products/productSlice"

function ProductList() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state: RootState) => state.products.products)
  const status = useAppSelector((state: RootState) => state.products.status)
  const error = useAppSelector((state: RootState) => state.products.error)
  const page = useAppSelector((state: RootState) => state.products.page)
  const limit = useAppSelector((state: RootState) => state.products.limit)
  const total = useAppSelector((state: RootState) => state.products.total)
  const searchquery = useAppSelector((state: RootState) => state.products.searchQuery)

  useEffect(() => {
    console.log(searchquery)
    if (searchquery) {
      dispatch(searchProducts({ query: searchquery, page, limit: 6 }))
      if (page > 1) {
        window.history.pushState({}, "", `/products?q=${searchquery}&p=${page}`)
      } else {
        window.history.pushState({}, "", `/products?q=${searchquery}`)
      }
      return
    }
    dispatch(fetchProduct({ page, limit: 6 }))
    if (page > 1) {
      window.history.pushState({}, "", `/products?p=${page}`)
    } else {
      window.history.pushState({}, "", "/products")
    }
  }, [dispatch, page, limit, searchquery])

  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">
        {error && <p className="alert alert-danger">{error}</p>}
        {status === "loading" ? (
          <p>Loading Products...</p>
        ) : (
          <>
            {products.map((product, index) => (
              <ProductItem key={index} item={product} />
            ))}
            <Pagination total={total} page={page} limit={limit} />
          </>
        )}
      </div>
    </div>
  )
}

export default ProductList
