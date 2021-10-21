import React from "react"
import cn from "classnames"

import content from "../../content/about"
import * as styles from "./about.module.css"
import Process from "./process.js"
import Slider from "./testimonial.js"
import AwesomSlider from '../Slider'


export default function AboutPage() {
  return (
    <div className={cn([styles.aboutContainer, styles.displayFlex])}>
      <AwesomSlider />
      {/* First Part */}
      <div className={cn([styles.firstPart, styles.displayFlex])}>
        <div
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
          className={cn([styles.firstPartMain, styles.main])}
        >
          {content.firstPart.main}
        </div>

        <div
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
          className={cn([styles.firstPartDescription, styles.description])}
        >
          {content.firstPart.description}
        </div>

        {/* Second Part  */}
      </div>
      <div className={styles.secondPart}>
        <img
          className={styles.secondPartImage}
          src={content.secondPart.image}
          alt=" "
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
        />

        <div className={cn([styles.secondPartBox, styles.displayFlex])}>
          <div
            className={cn([styles.secondPartBoxTitle, styles.title])}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          >
            {content.secondPart.title}
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
            className={cn([styles.secondPartBoxMain, styles.main])}
          >
            {content.secondPart.main}
            <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
            className={styles.submain2}
            >
              {content.secondPart.submain}
            </div>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
            className={cn([
              styles.secondPartBoxDescription,
              styles.description,
            ])}
          >
            {content.secondPart.description}
          </div>
        </div>
      </div>

      {/* Third Part */}

      <div className={cn([styles.thirdPart, styles.displayFlex])}>
        <div
          className={cn([styles.thirdPartTitle, styles.title])}
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
        >
          {content.thirdPart.title}
        </div>
        {/* <div className={cn([styles.thirdPartMain, styles.main])}>
          {content.thirdPart.main}
        </div> */}
        <div
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
          className={cn([styles.row])}
        >
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
            className={cn([styles.thirdPartDescription, styles.description,styles.left])}
          >
            {content.thirdPart.description}
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
            className={cn([styles.thirdPartDescription, styles.description,styles.right])}
          >
            {content.thirdPart.description}
          </div>
        

        </div>
      </div>


      <div className={cn([styles.fourthPart, styles.displayFlex])}>
        <div className={cn([styles.fourthPartTitle, styles.title])}>
          {content.fourthPart.title}
        </div>
        <div className={cn([styles.fourthPartMain, styles.main])}>
          {content.fourthPart.main}
        </div>

       <Process/>

        {/* <div className={styles.fourthPartImages}>
          <img
            loading="lazy"
            alt="Metro Flooring Work 1"
            src={content.fourthPart.firstImage}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          />
          <img
            loading="lazy"
            alt="Metro Flooring Work 2"
            src={content.fourthPart.secondImage}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          />
          <img
            loading="lazy"
            alt="Metro Flooring Work 3"
            src={content.fourthPart.thirdImage}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          />
          <img
            loading="lazy"
            alt="Metro Flooring Work 4"
            src={content.fourthPart.fourthImage}
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="350"
            data-sal-easing="ease-in"
          />
        </div> */}
        
      </div>
      <div id="contact" className={cn([styles.fifthPart, styles.displayFlex])}>
        <div
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
          className={styles.title}
        >
          {content.fifthPart.title}{" "}
        </div>
        {/* <div className={cn([styles.fifthPartMain, styles.main])}>
          {content.fifthPart.main}
        </div> */}
        <div
          className={cn([styles.fifthPartDescription, styles.description])}
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="350"
          data-sal-easing="ease-in"
        >
          {content.fifthPart.description.address}
          <br />
          {content.fifthPart.description.location}
          <br />
          {content.fifthPart.description.phone}
          {/* <br />
          {content.fifthPart.description.email}
          <br /> */}
        </div>
      </div>
    </div>
  )
}
