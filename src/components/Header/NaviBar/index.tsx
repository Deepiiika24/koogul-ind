import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { ContextModalSearch } from "../../context/ContextModalSearch"
import Logo from "./Logo"
import ToggleButton from "./ToggleButton"
import NavigationLinks from "./NavigationLinks"
import AdditionalActions from "./AdditionalActions"

const NaviBar: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const valueAdd = useMemo(
    () => ({
      isOpenModal,
      setIsOpenModal
    }),
    [isOpenModal]
  )

  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  useEffect(() => {
    // Lấy path từ URL hiện tại và loại bỏ ký tự '/' ở đầu
    const currentPath = location.pathname.slice(1)
    setActiveLink(currentPath) // Cập nhật activeLink với path hiện tại
  }, [location])
  return (
    <div>
    <ContextModalSearch.Provider value={valueAdd}>
      <Navbar bg="light" expand="xl" className="bg-white">
        <Logo />
        <ToggleButton />
        <Navbar.Collapse id="navbarCollapse">
          <NavigationLinks activeLink={activeLink} />
          <AdditionalActions />
        </Navbar.Collapse>
      </Navbar>
    </ContextModalSearch.Provider>
    </div>
  )
}

export default NaviBar
