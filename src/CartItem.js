import React from 'react';

class CartItem extends React.Component {
 

  // testing(){
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then (() => {
  //     //setState acts like synchonise call
  //     this.setState ({ qty: this.state.qty +10});
  //     this.setState ({ qty: this.state.qty +10});
  //     this.setState ({ qty: this.state.qty +10});

  //     console.log('state',this.state);
  //   });

 // }


  increaseQuantity = () =>{
    console.log('this',this.state);

    // // setState form   method 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form metdod 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }

  decreaseQuantity = () =>{
    const { qty} = this.state;

    if(qty === 0) {
      return;
    }

    // setState form metdod 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }


  render () {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/2040/2040520.png"
              onClick={ this.increaseQuantity }
            />

            <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/2040/2040522.png" 
              onClick={ this.decreaseQuantity }
            />

            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/4044/4044040.png" 
            
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;