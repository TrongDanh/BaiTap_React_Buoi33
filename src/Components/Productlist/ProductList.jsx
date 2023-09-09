import React, { Component } from 'react'

export default class ProductList extends Component {
    
  render() {
    console.log(this.props)
    const {data} = this.props.data;
    // const {product} = this.props.onGetProductDetail;

    return (
        <div className="row" >
          {this.props.data.map ((item) => {
            return (
              <div className="col-3" >
                <div className="card m-2">
                  <img className='w-75' src={item.image} alt="" />
                  <div className="card-body">
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                    <button onClick={() =>
                      this.props.onGetProductDetail(item)
                    } className='btn btn-primary'>View Detail</button>
                    <button className='ms-2 btn btn-dark'>add to card</button>
                  </div>
                </div>
              </div>
            ) 
          })}
        </div>
    )
  }
}
