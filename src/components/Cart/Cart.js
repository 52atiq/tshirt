import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {

    let command;
    if(cart.length ===0){
        command= <div>
            <h2>Oh kipta khoroc  kores na kn??</h2>
             <p> <small>Please at least one item add</small></p>
        </div>
    }
    else if(cart.length === 1){
        command = <p> <small>Please add more....</small></p>
    }
    else{
        command= <p> <small>Thanks for adding item </small></p>
    }
    return (
        <div>
            <h2>Selected Items:{cart.length} </h2>
         
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button> 
                    </p>)
            }
            {cart.length === 0 || <p className='orange'> YAY! You Are Buying ..</p>}
             {cart.length ===3 &&  <div className='orange'>
                 <h3> Trigonal</h3> 
                 <p> Tin jon ke ki gift diba </p>
             </div>  }
               {command}
               {cart.length !==4 ? <p>keep adding</p> : <button> Remove All</button>}
               {cart.length ===4 && <button className='orange'> Review  </button>}
        </div>
    );
};

export default Cart;