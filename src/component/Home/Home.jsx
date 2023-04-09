import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Countries from '../Countrys/Countries';
import './Home.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const countries = useLoaderData();
    const [names, setNames] = useState([])

    const handleToAddName = (name) => {
        const exists = names.find(nam => nam.name.common === name.name.common);
        if(exists){
            toast ('You already added this Item!!!')
        }
        else{
            const newName = [...names, name];
            setNames(newName);
        }
    }
    const removeFromCart = (name) => {
        const remaining = names.filter(pd => pd.name.common !== name)
        setNames(remaining)
    }
    return (
        <div className='cart-container'>
            
            <div className='carts grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {
                countries.map(country=><Countries handleToAddName={handleToAddName} country={country} key={country.cca3}></Countries>)
            }
            </div>
            <div>
                <Cart cart={names}  removeFromCart={removeFromCart}></Cart>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Home;