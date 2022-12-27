import React from 'react'
import { Link } from 'react-router-dom'

const CardItems = ({item}) => {
  return (
    <>
   <div className="card" style={{width: '18rem'}}>
  <img src={item.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    {/* <p className="card-text">{item.des}</p> */}
    <p className="card-text">{item.info}</p>
    <p className="card-text">{item.glass}</p>
    <Link to={`/products/${item.id}`} className="btn btn-primary mt-2">Details</Link>
  </div>
 </div>

    </>
  )
}

export default CardItems