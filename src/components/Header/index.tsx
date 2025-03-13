import type React from "react"
import { Container } from "react-bootstrap"
import TopBar from "./TopBar"
import NaviBar from "./NaviBar"
import Spinner from "./Spinner"
import Search from "../Modal/Search"
import { useAppSelector } from "../../app/hooks"

const Header: React.FC = () => {
  const isOpenModal = useAppSelector((state) => state.modal.isOpen)
  return (
    <>
      <Spinner />
      <header className="container-fluid fixed-top">
        <TopBar />
        <Container className="px-0">
          <NaviBar />
        </Container>
        {
          isOpenModal && <Search />
        }
      </header>

    </>
  )
}

export default Header
