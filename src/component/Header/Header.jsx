import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const navigation = useNavigation()
    return (
        <div className='header'>
          <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contents">Contents</ActiveLink>
            <ActiveLink to="/login">Login</ActiveLink>
        </div>
    );
};

export default Header;