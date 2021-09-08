/** @jsx jsx */
import { jsx } from "theme-ui"
import { RiCopyrightLine } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        <span className="icon">
          <RiCopyrightLine />
        </span>{" "}
        P. J. Allcock
      </p>
    </div>
  </footer>
)

export default Footer
