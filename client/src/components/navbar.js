import React from 'react';

import styls from './navbar.module.css';
const navbar = () => {
    return (
        <div className={styls.navbar}>
            <a href="#">Gmail</a>
            <a href="#">Login</a>
        </div>
    );
};

export default navbar;
