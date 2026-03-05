import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
const Orders = () => {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/orders")
    .then((x)=>setProduct(x.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <>
      <Nav/>
      <center><h1>List of Orders</h1></center>

      {product.map((x)=>{
        return <div className="cards">
          <img height={"100px"} src={x.productImage} alt="" />
          <h2>Quantity: {x.quantities}</h2>
          <h2>Price: {x.totalPrice}</h2>
          <h2>Rating⭐: {x.productRating}/5</h2>
        </div>
      })}
    </>
  )
}

export default Orders