import type React from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import TopInfo from "./TopInfo"
import TopLink from "./TopLink"

const TopBar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 992) {
        if (window.scrollY > 55) {
          document.querySelector(".fixed-top")?.classList.add("shadow")
        } else {
          document.querySelector(".fixed-top")?.classList.remove("shadow")
        }
      } else if (window.scrollY > 55) {
        document.querySelector(".fixed-top")?.classList.add("shadow")
        document.querySelector(".fixed-top")?.setAttribute("style", "top: -55px")
      } else {
        document.querySelector(".fixed-top")?.classList.remove("shadow")
        document.querySelector(".fixed-top")?.setAttribute("style", "top: 0")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <Container className="topbar bg-primary d-none d-lg-block">
      <div className="d-flex justify-content-between">
        <TopInfo />
        <TopLink />
      </div>
    </Container>
  )
}

export default TopBar
