import type React from "react"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchCurrentUser, logout } from "../../features/login/loginSlice"
import { useNavigate } from "react-router-dom"

const Profile: React.FC = () => {
  const token = useAppSelector((state) => state.login.token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.login.user)

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser(token))
    } else {
      navigate("/login")
    }
  }, [token, dispatch])
  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }
  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Profile</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Gender: {user.gender}</p>
          <img src={user.image} alt="User profile" className="img-fluid rounded-circle" />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
