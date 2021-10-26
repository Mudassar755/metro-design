import React from "react"
import cn from "classnames"
import sal from "sal.js"
import "../../../node_modules/sal.js/dist/sal.css"

import ImageCloudinary from "../ImageCloudinary"
import * as styles from "./portfolio.module.css"
import TransitionLink from "../TransitionLink"
import useInViewPort from "../../useInViewPort"
import { Link, Element } from 'react-scroll';
import Sidebar from '../Sidebar'

const rowStyles = [styles.rowStart, styles.rowEnd]
const content = require("../../content/portfolio")

export default function PortfolioPage() {
  const [translateY, setTranslateY] = React.useState("5%")
  const [elementScroll, setElemetScroll] = React.useState(0)

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
          ? 5 + scrollPercent * 20
          : maxHeight - (scrollPercent - 0.5) * 60

      setTranslateY(`${newTranslateY}%`)
  
        }
        setElemetScroll(document.documentElement.scrollHeight)

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }

  }, [])

  return (
    <div className={styles.projects} id="wrapper">
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


      <Sidebar elementScroll={elementScroll} />

      <div className={styles.rowsContainer}>
        {content.projects.map((project, index) => (
          // <Element name={`section${index}`}
          //  className={styles.contentElement} 
          //  className={cn([styles.row, rowStyles[index % 2]])}
          //  >
          <div
          name={`section${index}`}
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
              
                <div className={styles.shadow3} >
                  <img className={styles.shadow33} src={project.aspectRatio} alt=""
                    style={{
                      backgroundColor: project.backgroundColor,
                      transform: `translate3d(6%, ${translateY}, 0)`
                    }} />
                </div>
            </div>
            <div className={styles.titleMobile}>{project.title}</div>
          </div>
              // {/* </Element> */}

        ))}</div>
    </div>
  )
}