import React from 'react';
import './Country.css'
import { Link, useNavigate } from 'react-router-dom';


const Counrty = ({country}) => {
    const navigate = useNavigate()
    const handleGoback = () => {
        navigate(-1)
        }
    const {flags, name, population, region} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>Name: {name.common}</h1>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <Link><button onClick={handleGoback}>Go Back</button></Link>
        </div>
    );
};

export default Counrty;