import React from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ProductDetails = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get(`http://localhost:5000/products/${id}`)
      .then(x=>setProduct(x.data))
      .catch(err=>console.log(err))
  },[])

  function billing_page(id){
    navigate(`/billing/${id}`)
  }
  return (
    <>
    <Nav/>
    <center><h1>Product</h1></center>
    <h1>{product.name}</h1>
    <img height={"300px"} src={product.img} alt="" />
    <h2>Price: {product.price}-/-</h2>
    <h2>{product.description}</h2>
    <h2>Ratings: ⭐{product.rating}/5</h2>
    <button onClick={()=>{billing_page(product.id)}}>Buy now</button>
    </>
  )
}

export default ProductDetails