import React,{useState,useEffect} from 'react'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Billing = () => {
  let {id} = useParams()
  let [product, setProduct] = useState({})
  let [quantity, setQuantity] = useState(1)

  function increment(){
    setQuantity(quantity+1)
  }

  function decrement(){
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [phone,setPhone] = useState("")
  let [address,setAdress] = useState("")

  let navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`)
    .then(x=>setProduct(x.data))
    .catch(err=>console.log(err))
  },[])

  function orderProduct(e){
    e.preventDefault()

    const orderData = {
      productId:product.id,
      productName:product.name,
      productImage:product.img,
      productRating:product.rating,
      totalPrice:quantity*product.price,
      quantities:quantity,
      customer:{
        name:name,
        email:email,
        phone:phone,
        address:address
      },
      date: new Date().toLocaleString(),
      status:"not delivered"
    }
    axios.post("http://localhost:5000/orders",orderData)
    .then(()=>{
      navigate("/success")
    })
    .catch(err=>console.log(err))
  }

    return (
    <>
    <Nav/>
    <center><h1 style={{marginBottom:"50px"}}>Billing page</h1></center>

    <div className="container">
      <div className="left-side">
        <h2>{product.name}</h2>
        <h2>Price: {product.price}-/-</h2>
        <img height={"150px"} src={product.img} alt="" />
        <button onClick={decrement}>-</button>
        {quantity}
        <button onClick={increment}>+</button>
      </div>

      <div className="right-side">
        <form action="" onSubmit={orderProduct}>
          <h2>Add Address</h2>
          <input type="text" placeholder='Enter name' required value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter Mobile number' required value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br />
          <textarea placeholder='Enter address' required value={address} onChange={(e)=>{setAdress(e.target.value)}}></textarea> <br />
          <button>Place order</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Billing