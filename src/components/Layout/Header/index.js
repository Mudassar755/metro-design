import React from "react"

import * as styles from "./header.module.css"
import TransitionLink from "../../TransitionLink"

const largeLogo =
  "https://res.cloudinary.com/metrodesign/image/upload/c_scale,h_30/v1598193159/metro-flooring/Logo/Logo_Black_dr1zgk.png"
const smallLogo =
  "https://res.cloudinary.com/metrodesign/image/upload/c_scale,h_20/v1598193159/metro-flooring/Logo/Logo_Black_dr1zgk.png"

export default function Header({ isTransparentHeader }) {
  return (
    <header
      className={styles[isTransparentHeader ? "transparentBg" : "visibleBg"]}
    >
      {/* Logo Link */}
      <div className={styles.logo}>
        <TransitionLink 
          cover direction="up" bg="#D1CAC4" to="/">
            <picture>
              <source media="(min-width: 321px)" srcSet={largeLogo} />
              <img src={smallLogo} alt="Metro Flooring Logo" />
            </picture>
        </TransitionLink>
      </div>

      {/* Projects Link */}
      <div className={styles.menuItems}>
        <TransitionLink cover direction="up" bg="#D1CAC4" to="/portfolio">
          <span className={styles.projects}>Projects</span>
        </TransitionLink>

        {/* About Link */}
        <TransitionLink cover direction="up" bg="#D1CAC4" to="/about">
          <span className={styles.aboutUs}>About Us</span>
        </TransitionLink>
      </div>
      {/* Contact Link */}
      <a
        href="https://contact.metrofid.com/"
        className={styles.contact}
        target="_blank"
        rel="noreferrer"
      >
        Contact
      </a>
    </header>
  )
}
const MemoizedHeader = React.memo(Header);