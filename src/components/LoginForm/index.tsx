import type React from "react"
import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useNavigate } from "react-router-dom"
import { fetchCurrentUser, loginUser, logout } from "../../features/login/loginSlice"

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("emilys")
  const [password, setPassword] = useState("emilyspass")
  const dispatch = useAppDispatch()
  const loginStatus = useAppSelector((state) => state.login.status)
  const loginError = useAppSelector((state) => state.login.error)
  const navigate = useNavigate()
  const token = useAppSelector((state) => state.login.token)

  useEffect(() => {
    if (loginStatus === "succeeded" && token) {
      dispatch(fetchCurrentUser(token)).then(() => {
        navigate("/profile")
      })
    }
  }, [loginStatus, token, dispatch, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Login</h1>
              <form method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    name="u"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="p"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Let me in</button>
                {loginStatus === "loading" && <p>Loading...</p>}
                {loginStatus === "failed" && <p className="text-danger">{loginError}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
