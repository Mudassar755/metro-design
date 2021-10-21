import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function TranisitonLink({ bg, ...props }) {
  function bgContainer(bg) {
    document.querySelector(".tl-cover-el").style.background = bg
  }

  return <AniLink onClick={() => bgContainer(bg)} bg={bg} {...props} 
  exit={{
    zIndex: 2 // exit default is 0
  }}
  entry={{
    zIndex: 2, // entry default is 1
    delay: 6
  }}/>
}
