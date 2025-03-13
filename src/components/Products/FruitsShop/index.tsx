import React, { useEffect, useState } from "react"
import Left from "./Left"
import ProductList from "./ProductList"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchProduct, setPage, setSearchQuery } from "../../../features/products/productSlice"
import type { RootState } from "../../../app/store"

const FruitsShop: React.FC = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector((state: RootState) => state.products.searchQuery)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      dispatch(setSearchQuery(searchQuery))
    }
  }
  useEffect(() => {
    dispatch(setSearchQuery(searchQuery))
  }, [dispatch, searchQuery])

  return (
    <div>
    {/* <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <form className="input-group w-100 mx-auto d-flex" onSubmit={handleSearch}>
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                    value={searchQuery}
                    onChange={(e) => {
                      dispatch(setSearchQuery(e.target.value))
                    }}
                  />
                  <button type="submit" id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <div className="col-6" />
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label htmlFor="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    className="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                  >
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <Left />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default FruitsShop
