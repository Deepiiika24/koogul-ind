import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../AuthContext";
import { toast } from "react-toastify";

const AdditionalActions: React.FC = () => {
  const navigate = useNavigate();
  const { username, logout } = useAuth();
  const { totalQuantity } = useAppSelector((state) => state.cart);

  const handleGoCart = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/cart");
  };

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
    toast.success("Logged out successfully"); 
  };

  return (
    <div className="d-flex align-items-center m-3 ml-auto">
      {/* Only show cart icon if user is logged in */}
      {username && (
        <a onClick={handleGoCart} href="/#" className="position-relative me-4 my-auto">
          <i className="fas fa-shopping-bag fa-2x" />
          {totalQuantity > 0 && (  // Changed from >1 to >0 to show badge for single item
            <span
              className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
              style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}
            >
              {totalQuantity}
            </span>
          )}
        </a>
      )}

      <Dropdown>
        <Dropdown.Toggle variant="link" className="text-primary d-flex">
          <div>
            <i className="fas fa-user fa-2x me-2" style={{ fontSize: "15px" }} />
            <span className="fw-bold">Profile</span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" className="shadow-lg rounded-3 p-2">
          {username ? (
            <>
              <Dropdown.ItemText className="text-center text-muted">
                <b>Hello, {username}</b> - Access your Koogul account
              </Dropdown.ItemText>
              <Dropdown.Divider />
              <div className="d-flex flex-column text-center">
                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Dropdown.ItemText className="text-center text-muted">
                <b>Hello, User</b> - Access your Koogul account
              </Dropdown.ItemText>
              <Dropdown.Divider />
              <div className="d-flex flex-column text-center">
                <Link to="/LoginRegitser" className="btn btn-primary btn-sm mb-2">
                  Login
                </Link>
              </div>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AdditionalActions;