import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <h2>Cartify</h2>
        </div>
        <div className="right">
          <ol>
            <Link className='link' to={"/"}><li>Home</li></Link>
            <Link className='link' to={"/products"}><li>Products</li></Link>
            <Link className='link' to={"/orders"}><li>Orders</li></Link>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Nav