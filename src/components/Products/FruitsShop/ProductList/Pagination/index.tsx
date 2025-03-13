import React from "react"
import { setPage } from "../../../../../features/products/productSlice"
import { useAppDispatch } from "../../../../../app/hooks"

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, page, limit }) => {
  const totalPages = Math.max(1, Math.ceil(total / (limit || 1)))
  const dispatch = useAppDispatch()
  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage))
  }
  const handlePrevPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (page > 1) handlePageChange(page - 1)
  }

  const handleNextPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (page < totalPages) handlePageChange(page + 1)
  }

  const handleFirstPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    handlePageChange(1)
  }

  const handleLastPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    handlePageChange(totalPages)
  }

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, newPage: number) => {
    e.preventDefault()
    if (newPage !== page) handlePageChange(newPage)
  }


  return (
    <div>
    
      {/* <div className="col-12">
        <div className="pagination d-flex justify-content-center mt-5">
          {renderPageNumbers()}
        </div>
      </div> : null */}
      </div>
  )
}

export default Pagination
