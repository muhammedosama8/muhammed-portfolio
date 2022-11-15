import React, {useState} from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return ( 
        <div className='navbar'>
            <div className='container d-flex s-between item-center'>
                <div className='logo-title'>
                    <h1>Muha<span>mmed</span></h1>
                </div>
                <div className='navbar-list'>
                    <ul className='menu'>
                    {['home', 'information', 'work', 'about', 'skills', 'contact'].map((item, index) => (
                        <li className='menu-item' key={index}>
                            <div />
                            <a className='menu-item-link' href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className='navbar-meu'>
                    <HiMenuAlt4 className='open-icon' onClick={() => setToggle(true)} />
                    {toggle && (
                        <div>
                            <button className='close-icon' onClick={()=> setToggle(false)} >X</button>
                            <ul>
                            {['home', 'information', 'about', 'work','skills', 'contact'].map((item) => (
                                <li  key={item}>
                                    <a  href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;