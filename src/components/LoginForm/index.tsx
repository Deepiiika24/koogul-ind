import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <>
      <div className="container-fluid cart-header py-5">
        <h1 className="text-center text-white display-6">Log-In</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/index.html#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/public#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Log-In</li>
        </ol>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="">
              <div className="card-body">
                <h1 className="card-title">Create your account</h1>
                <form method="post">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
