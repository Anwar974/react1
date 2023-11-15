import React from 'react'
import Product from './Product.js'

function Products() {

  const products = [
    {id:0, title:'Product One', desc:'disciption for product one', price:1000},
    {id:1, title:'Product two', desc:'disciption for product two', price:1000},
    {id:2, title:'Product three', desc:'disciption for product three', price:1000},
    {id:3, title:'Product four', desc:'disciption for product four', price:1000},
    
  ]
  return (

<>
  <div className="container">
  <div className="row">
    {
      products.map((product) => {
        return <Product {...product} key={product.id}/>
    })}
  

 
</div>
</div>
</>
)}

export default Products