import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="name">
          <h2>Cartify</h2>
        </div>

        <div className="product-list">
          <ol>
            <li>Fashion</li>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Shoes</li>
            <li>Dairy</li>
          </ol>
        </div>

        <div className="address">
          <h2>Bengaluru</h2>
          <h3>cartify@gmail.com</h3>
          <h3>+91 9876543567</h3>
        </div>
      </div>
    </>
  )
}

export default Footer