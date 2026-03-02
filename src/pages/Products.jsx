import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
const Products = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:5000/products")
      .then(x=>setProducts(x.data))
      .catch(err=>console.log(err))
  },[])

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
            <button>View</button>
          </div>
      })}
      </div>
    </>
  )
}

export default Products