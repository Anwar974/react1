import React from 'react'

function Product(props) {
  return (
    <>
     <div className="col-md-3">
      <div className="product">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
    </>
  )
}

export default Product