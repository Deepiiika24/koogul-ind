import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { closeModal } from "../../../features/modal/modalSlice"
import { setSearchQuery } from "../../../features/products/productSlice"

const Search: React.FC = () => {
  const isOpenModal = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState("")

  const handleCloseEsc = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        handleClose()
      }
    },
    [dispatch]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleCloseEsc)
    return () => document.removeEventListener("keydown", handleCloseEsc)
  }, [handleCloseEsc])

  const handleClose = useCallback(() => {
    dispatch(closeModal())
  }, [dispatch])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/products?q=${encodeURIComponent(keyword)}`)
      dispatch(setSearchQuery(encodeURIComponent(keyword)))
      handleClose()
    }
  }

  return (
    <Modal
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      aria-hidden="true"
      className="modal-content rounded-0"
      fullscreen
      show={isOpenModal}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 id="contained-modal-title-vcenter">Search by keyword</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center">
        <div className="input-group w-75 mx-auto">
          <form className="w-100" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="input-group-text p-3" id="search-icon-1">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Search
