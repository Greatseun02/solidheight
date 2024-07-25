import React, { Children } from 'react'

export default function Container({className, children}) {
  return (
    <div className={className + " container mx-auto px-sm xl:px-xl"} >
        {children}
    </div>
  )
}
