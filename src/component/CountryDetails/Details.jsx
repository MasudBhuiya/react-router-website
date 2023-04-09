import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Counrty from '../Counrty/Counrty';

const Details = () => {
    const loader = useLoaderData();
    return (
        <div>
            {
            loader.map(country => <Counrty key={country.cca2} country={country}></Counrty>)
        }
        </div>
    );
};

export default Details;