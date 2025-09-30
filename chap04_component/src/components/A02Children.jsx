import React from 'react'

function A02Children(props) {
  return (
    <div className="mb-5">
      <h3>A02Children</h3>

      <>
        {props.children}

        {props.greet}
      </>
    </div>
  )
}

export default A02Children
