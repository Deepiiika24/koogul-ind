import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { openModal } from "../../../../features/modal/modalSlice"
import type { RootState } from "../../../../app/store"
import { useNavigate } from "react-router-dom"
import { fetchCurrentUser } from "../../../../features/login/loginSlice"

const AdditionalActions: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { totalQuantity } = useAppSelector((state: RootState) => state.cart)
  const token = useAppSelector((state) => state.login.token)
  const user = useAppSelector((state) => state.login.user)

  const handleOpenModal = () => {
    dispatch(openModal())
  }
  const handleGoCart = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate("/cart")
  }
  const handleGoUser = (e: React.MouseEvent) => {
    e.preventDefault()
    if (token) {
      navigate("/profile")
    } else {
      navigate("/login")
    }
  }


  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser(token))
    }
  }, [token, dispatch])
  return (
    <div className="d-flex m-3   ml-auto">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button onClick={handleOpenModal}
              className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4">
        <i className="fa fa-search text-primary" />
      </button>
      <a onClick={handleGoCart} href="/#" className="position-relative me-4 my-auto">
        <i className="fas fa-shopping-bag fa-2x" />
        {totalQuantity > 1 && (
          <span
            className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
            style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}>{totalQuantity}</span>
        )}
      </a>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a onClick={handleGoUser} href="/#" className="my-auto">
        <i className="fas fa-user fa-2x" />{user ? user.username : "Login"}
      </a>
    </div>
  )
}
// <p>Username: {user.username}</p>
//           <p>Email: {user.email}</p>
//           <p>First Name: {user.firstName}</p>
//           <p>Last Name: {user.lastName}</p>
//           <p>Gender: {user.gender}</p>
//           <img src={user.image} alt="User profile" className="img-fluid rounded-circle" />
export default AdditionalActions
