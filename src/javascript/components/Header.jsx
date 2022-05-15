import React from 'react';

function Header(props) {
    const {title}= props;
    return ( 
        <header className='h-14 bg-purple-700 flex justify-center'>
            <span className='self-center text-white text-bold text-xl'>{title}</span>
        </header>
     );
}

export default Header;