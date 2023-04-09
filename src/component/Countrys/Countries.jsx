import React from 'react';
import './Countries.css'
import { Link } from 'react-router-dom';

const Countries = ({country, handleToAddName}) => {
    const {flags, name, capital, area} = country;
    return (
        <div className='countries'>
            <img className='mx-auto ' src={flags.png} alt="" />
            <h2 className='font-bold text-xl'>Countries:{name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <Link to={`/name/${name.common}`}>
            <button className='btn'>Details</button></Link>
            <Link><button onClick={() => handleToAddName(country)} className='btn'>Add to List</button></Link>
        </div>
    );
};

export default Countries;