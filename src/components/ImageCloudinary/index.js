import React from "react"

export default function ImageCloudinary({ path, isBig = true }) {
  const prefix = "https://res.cloudinary.com/metrodesign/image/upload"
  const mobileWidth = "480"
  const desktopWidth = isBig ? 1200 : 400
  const desktopSrc = `${prefix}${path}`
  const mobileSrc = `${prefix}${path}`

  return (
    <picture>
      <source 
      //  media="(min-width: 480px)" 
       srcSet={desktopSrc} />
      <img loading="lazy" src={mobileSrc} alt="" />
    </picture>
  )
}
