import React from 'react'

function NotFound(props) {
  return (
    <div className="text-white bordered">
        <h1>404 | Pokemon Not Found</h1>
        {props.search && <h3>{props.search} is not a Pokemon</h3>}
    </div>
  )
}

export default NotFound