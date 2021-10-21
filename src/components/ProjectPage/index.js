import React from "react"
import sal from "sal.js"
import "../../../node_modules/sal.js/dist/sal.css"
import Plx from "react-plx"

import ImageCloudinary from "../ImageCloudinary"
import TransitionLink from "../TransitionLink"
import Layout from "../Layout"
import Footer from "../Layout/Footer"
import cn from "classnames"
import "../../../node_modules/sal.js/dist/sal.css"
import clsx from "clsx"

import * as styles from "./projects.module.css"
import { projects } from "../../content/portfolio"
const content = require("../../content/portfolio")

const rowStyles = [styles.rowStart, styles.rowEnd]

export default function ProjectPage({ pageContext: { content, nextPage } }) {
  React.useEffect(() => {
    sal()
  }, [])

  const parallaxData = [
    {
      start: 0,
      end: 600,
      easing: "easeInOut",

      properties: [
        {
          startValue: 1,
          endValue: 0.3,
          property: "brightness",
        },
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ]

  const colsLimit = Math.ceil(content.images.length / 2)

  return (
    <Layout isTransparentHeader={true} noFooter={true}>
      <Plx
        className={styles.imageContainer}
        parallaxData={parallaxData}
        style={{
          backgroundImage: `url(https://res.cloudinary.com/metrodesign/image/upload${content.images[0]})`,
        }}
        >
          {/* <img src={'https://res.cloudinary.com/metrodesign/image/upload' + content.images[0]} /> */}
          </Plx>


      {/* <div 
        className={styles.hero}
        style={{
        backgroundImage: `url(https://res.cloudinary.com/metrodesign/image/upload${content.images[0]})`,
        }}>
          <h1></h1>


      </div> */}
                                                          {/* Description box  */}
      <div className = {styles.textContainer}>
        <div className = {styles.descriptionContainer}>
          <div className = {styles.descriptionBox}
               style     = {{backgroundColor: content.backgroundColor}}>
            <div className = {styles.descriptionTitle}>{content.title}</div>
            <div className = {styles.descriptionText}>{content.description}</div>
          </div>
        </div>

                                                          {/* Project Page Layout  */}
        
        <div className={styles.mobileLayout}>
          {content.images.map((image, index) => (
            <div
              data-sal          = "slide-up"
              data-sal-delay    = "150"
              data-sal-duration = "350"
              data-sal-easing   = "ease-in"
              className         = {styles.salAnimation}
              key               = {index}
            >
              
                <ImageCloudinary className={styles.images} path={image} />
              </div>
          ))}
        </div>

        <div className={styles.desktopLayout}>
          <div className={cn([styles.images])}>
            {content.images.map((image, index, arr) => {
              const previousItem = arr[index - 1];
              const earlyItem = arr[index - 2];
              return (
                <div
                  
                  data-sal-delay    = "150"
                  data-sal-duration = "350"
                  data-sal-easing   = "ease-in"
                  key               = {index}
                  className         = {clsx(styles.row, rowStyles[index % 2], {
                                            [styles.tall]: image.includes('?tl'),
                                            [styles.wide]: image.includes('?wd'),
                                            [styles.close]: index > 1 && earlyItem.includes('?wd'),
                                            [styles.closer]: index >= 1 && previousItem.includes('?wd'),
                                            [styles.closest]: index >= 1 && previousItem.includes('?tl'),
                                            [styles.closest2]: index >= 1 && previousItem.includes('?tl') && image.includes('?wd'),
                                            [styles.closest3]: index > 1 && previousItem.includes('?wd') && earlyItem.includes('?tl')
                                            })}
                                      {...(index > 0 && { "data-sal": "slide-up" })}
                >
                    <ImageCloudinary path={image} />
                </div>
            )})}
          </div>
        </div>
                                                          {/* Next Project */}

        <TransitionLink
          className={styles.desktopNextProject}
          cover
          direction="up"
          bg={nextPage.backgroundColor}
          to={nextPage.url}>
          <div className={styles.nextProject}>
            <div
              className={styles.nextProjectImage}
              style={{
                backgroundImage: `url(${nextPage.image})`,
              }}
            />
            <div className={styles.nextProjectTitle}>
              <span
                className={cn([styles.nextProjectText, styles.nextProjectText])}
              >
                Next project
              </span>
              <span
                className={cn([styles.nextProjectText, styles.nextProjectBar])}
              >
                |
              </span>
              <span
                className={cn([styles.nextProjectText, styles.nextProjectNext])}
              >
                {nextPage.title}
              </span>
            </div>
          </div>
        </TransitionLink>

        <div className={styles.mobileNextProject}>
          <div className={styles.mobileNextTitle}>
            <TransitionLink
              className={styles.mobileTransition}
              cover
              direction="up"
              bg={nextPage.backgroundColor}
              to={nextPage.url}>
              <span
                className={cn([styles.nextProjectText, styles.nextProjectText])}>
                Next project
              </span><br/>
              <span
                className={cn([styles.nextProjectText, styles.nextProjectNext])}>
                {nextPage.title}
              </span>
            </TransitionLink>
          </div>
        </div>

        <Footer />
      </div>

    </Layout>
  )
}

{
  /* Previous Project Page Layout

      <div className={styles.images}>
        {content.images.map((image, index) => (
          <div
            key={index}
            className={cn([styles.row, rowStyles[index % 2]])}
            {...(index > 0 && { "data-sal": "slide-up" })}
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          >
            <ImageCloudinary path={image} />
          </div>
        ))}
      </div> */
}
