import React from 'react'
import a from "../videos/success.mp4"
import { useNavigate } from 'react-router-dom'
const Success = () => {
  let navigate = useNavigate()
  return (
    <>
      <div className="video-container">
        <h1>Cartify</h1>
        <video style={{height:"300px", borderRadius:"50%"}} src={a}  muted autoPlay loop></video>
        <h2>🎉Order Placed🎉`</h2>

        <button onClick={()=>{navigate("/products")}}>Shop more</button>
      </div>
    </>
  )
}

export default Success