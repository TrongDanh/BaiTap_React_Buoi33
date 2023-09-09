import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    console.log(this.props);
    const {product} = this.props;
    return (
      <div className="mt-5">
        <h1 className='text-center'>ProductDetail</h1>
        <div className='row'>
          <div className="col-4">
            <img className='w-100' src={product?.image} alt="" />
          </div>
          <div className="col-8 pt-5">
              <h2>{product?.name}</h2>
              <h4>{product?.price}</h4>
              <p>{product?.description}</p>
          </div>
        </div>
      </div>
      
    )
  }
}
