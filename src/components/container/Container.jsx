import React from 'react'

function Container({children}) {  //children is a special prop it is used to render those componenets which are placed in between this container component
  return (
    <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
  )
}

export default Container