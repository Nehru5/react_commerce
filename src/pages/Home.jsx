import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <Nav/>
      <div className="hero-section">
        <h2>Welcome to Cartify</h2>
        <p>Discover the products in affordable price</p>
        <button>Shop now</button>
      </div>
      <center><h1 style={{margin:"30px"}}>Products</h1></center>
      <div className="products">
        <img src="https://www.triveniworld.com/cdn/shop/articles/top-mobile-phones-of-2025-guides-and-reviews-triveni-world.webp?v=1736040418&width=600" alt="" />
        <img src="https://audaces.com/wp-content/uploads/2022/12/fashion-product-mix.webp" alt="" />
        <img src="https://simplyfresh.info/wp-content/uploads/2015/09/simply-handlingdairy-300x207.jpg" alt="" />
      </div>


          <div className="products">
        <img src="https://lh4.googleusercontent.com/proxy/89jgkAVB-qLVLwQT5c6g3k6IhdZFZWBRUuIhY1ZA3HNdadQ0sltSpQ9FRYe9MQ0ItYv-m865VocmKwkGTs-PJbxyMSkwChqnupmpfK5c4xlF8enpw1Ctow-JO6POficML0CLWe6y_lCIJrWKLgcukrrsW_A8W77bdAG3dcY" alt="" />
        <img src="https://5.imimg.com/data5/SELLER/Default/2023/2/OH/FH/UX/80249956/smart-watch-ultra-8-500x500.jpeg" alt="" />
        <img src="https://in.aorus.com/upload/Product/F_202201041714708hZ1093.JPG" alt="" />
      </div>

      <Footer/>
    </>
  )
}

export default Home