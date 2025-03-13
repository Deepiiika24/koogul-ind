import type React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const TopInfo: React.FC = () => {
  return (
    <div className="top-info ps-2">
      <small className="me-3">
        <i className="fas fa-map-marker-alt me-2 text-secondary" />
        <a
          href="/public#"
          className="text-white"
        >
          No:11,  Kolapakkam, Tamil Nadu, India
        </a>
        {" "}
        <FontAwesomeIcon icon={["fas", "envelope"]} className="me-2 text-secondary" />
        <a
          href="/public#"
          className="text-white"
        >
          koogulinfo@gmail.com
        </a>
      </small>
    </div>

  )
}

export default TopInfo
