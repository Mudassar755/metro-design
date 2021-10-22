import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import * as styles from './slider.module.css'
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'

const Slider = () => {
    return (
        <AwesomeSlider>
            <div className={styles.sliderWrapper}><img src={img1} alt="slider image" /></div>
            <div className={styles.sliderWrapper}><img src={img2} alt="slider image" /></div>
            <div className={styles.sliderWrapper}><img src={img3} alt="slider image" /></div>
            <div className={styles.sliderWrapper}><img src={img4} alt="slider image" /></div>
        </AwesomeSlider>

    )
}

export default Slider
