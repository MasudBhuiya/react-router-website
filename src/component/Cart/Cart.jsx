import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <h2>Country Summery: {cart.length}</h2>
            {
                cart.map(name => <p className='p-3'>{name.name.common}<span className='ml-4'><button className='bg-blue-300 p-1 rounded' onClick={()=>removeFromCart(name.name.common)}>x</button></span></p>)
            }
        </div>
    );
};

export default Cart;