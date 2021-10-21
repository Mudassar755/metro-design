import React from "react"
import sal from "sal.js"
import "../../../node_modules/sal.js/dist/sal.css"

import content from "../../content/home"
import * as styles from "./home.module.css"

export default function IndexPage() {
  React.useEffect(() => {
    sal()
  }, [])

  return (
    <div>
      <div className={styles.home}>
        <img src={`${content.image}`} />
      </div>
      <div className={styles.whatWeDoContainer}>
        <h2>{content.whatWeDo.title}</h2>
        <span className={styles.whatWeDoSub}>{content.whatWeDo.subtitle}</span>
        <div className={styles.offeredServices}>
          {/* First service */}

          <div
            className={styles.service}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={content.services.serviceOne.image}
                alt=""
              />
            </div>

            <span className={styles.title}>
              {content.services.serviceOne.title}
            </span>
            <span className={styles.description}>
              {content.services.serviceOne.description}
            </span>
          </div>

          {/* Second service */}

          <div
            className={styles.service}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={content.services.serviceTwo.image}
                alt=""
              />
            </div>
            <span className={styles.title}>
              {content.services.serviceTwo.title}
            </span>
            <span className={styles.description}>
              {content.services.serviceTwo.description}
            </span>
          </div>

          {/* Third service */}

          <div
            className={styles.service}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={content.services.serviceThree.image}
                alt=""
              />
            </div>
            <span className={styles.title}>
              {content.services.serviceThree.title}
            </span>
            <span className={styles.description}>
              {content.services.serviceThree.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
