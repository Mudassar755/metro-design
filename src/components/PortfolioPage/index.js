import React from "react"
import cn from "classnames"
import sal from "sal.js"
import "../../../node_modules/sal.js/dist/sal.css"

import ImageCloudinary from "../ImageCloudinary"
import * as styles from "./portfolio.module.css"
import TransitionLink from "../TransitionLink"
import useInViewPort from "../../useInViewPort"
import { Link } from 'react-scroll';

const rowStyles = [styles.rowStart, styles.rowEnd]
const content = require("../../content/portfolio")

export default function PortfolioPage() {
  const [translateY, setTranslateY] = React.useState("5%")
  const [scroll, setScroll] = React.useState(false)

  const [nodeRef, isVisible] = useInViewPort({ triggerOnce: false })

  // Scroll Effect
  React.useEffect(() => {
    sal()
    function onScroll() {
      const scrollPercent =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight - window.innerHeight)
      const maxHeight = 15
      const newTranslateY =
        scrollPercent < 0.5
          ? 3 + scrollPercent * 10
          : maxHeight - (scrollPercent - 0.3) * 10

      setTranslateY(`${newTranslateY}%`)

      const topScroll = window.scrollY > 3600;
      console.log("ssdsdfdf", topScroll)
      topScroll ? setScroll(true) : setScroll(false);
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }

  }, [])
  const handleSetActive = (to) => {
    console.log("tooooooooo",to);
  }

  return (
    <div className={styles.projects}>
      <div
        data-sal="slide-up"
        data-sal-delay="150"
        data-sal-duration="350"
        data-sal-easing="ease-in"
      >
        <div
          ref={nodeRef}
          className={`${styles.mainText} ${isVisible ? "" : styles.hidden}`}
        >
          {content.description}
        </div>
      </div>
      <div className={styles.links} style={{opacity:scroll && "0"}}>
        {content.projects.map((project, index) => (
          <div className={styles.link}>
            <Link 
            to={`section${index}`} 
            activeClass={styles.active} 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
      >Section One</Link>
          </div>

        ))}

      </div>
      <div className={styles.rowsContainer}>
        {content.projects.map((project, index) => (
          <div
            id={`section${index}`}
            key={index}
            className={cn([styles.row, rowStyles[index % 2]])}
            // {...(index > 0 && { "data-sal": "slide-up" })}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in">

            <div className={styles.content}>
              <TransitionLink
                className={styles.images}
                key={index}
                cover
                direction="up"
                bg={project.backgroundColor}
                to={`/project/${index}`}>
                <ImageCloudinary path={project.image} />
              </TransitionLink>

              <div className={styles.shadow3}>
                <img className={styles.shadow33} src={project.aspectRatio} alt=""
                  style={{
                    backgroundColor: project.backgroundColor,
                    transform: `translate3d(3%, ${translateY}, 0)`
                  }} />
              </div>
            </div>
            <div className={styles.titleMobile}>{project.title}</div>
          </div>

        ))}</div>
    </div>
  )
}