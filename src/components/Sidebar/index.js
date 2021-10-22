import React, { useEffect } from 'react'
import { Link, Element } from 'react-scroll';
import * as styles from "./sidebar.module.css"

const Sidebar = () => {
    const [scroll, setScroll] = React.useState(false)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            let el = document.getElementById("wrapper")
      const topScroll = Number(window.scrollY) > Number(el.offsetHeight - 580);
      topScroll ? setScroll(true) : setScroll(false);
    });
    
     }, [])
    
    return (
        <div className={styles.links} style={{ opacity: scroll && "0" }}>
          <div className={styles.link}>
            <Link
              to={`section0`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >1: sidebar should be it's own component</Link>
          </div>
          <div className={styles.link}>
            <Link
              to={`section1`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >2: only visable on desktop</Link>
          </div>
          <div className={styles.link}>
            <Link
              to={`section2`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >3: clicking title should autoscroll to project</Link>
          </div>
          <div className={styles.link}>
            <Link
              to={`section3`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >4: project title needs to highlight when image is centered</Link>
          </div>
          <div className={styles.link}>
            <Link
              to={`section4`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >5: first image is not scalling right</Link>
          </div>
          <div className={styles.link}>
            <Link
              to={`section5`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >6: project image animations need to be corrected</Link>
          </div>
          <div className={styles.link}>
            <Link
              to={`section6`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >7: animation should gradually move back when scrolling </Link>
          </div>
      </div>
    )
}

export default Sidebar
