import React from "react"
import MetaTags from "react-meta-tags"

const TheTitle = props => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>
          {props.title} | AKAPPS - Akademik Kadro Atama, Puanlama ve Performans
          sistemi
        </title>
      </MetaTags>
    </React.Fragment>
  )
}

export default TheTitle
