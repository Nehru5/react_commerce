import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const [products,setProducts] = useState([])
  let navigate = useNavigate()
  useEffect(()=>{
      axios.get("http://localhost:5000/products")
      .then(x=>setProducts(x.data))
      .catch(err=>console.log(err))
  },[])

  function product_list_navigation(id){
    navigate(`/product_details/${id}`)
  }
  return (
    <>
      <Nav/>
      <center><h1 style={{backgroundColor:"orange", padding:"20px"}}>Products</h1></center>

      <div className="product_card">
        {products.map((x)=>{
          return <div className='p-c'>
            <img src={x.img} alt="" />
            <h3>{x.name}</h3>
            <h3>Price: {x.price}</h3>
            <button onClick={()=>{product_list_navigation(x.id)}}>View</button>
          </div>
      })}
      </div>
    </>
  )
}

export default Products