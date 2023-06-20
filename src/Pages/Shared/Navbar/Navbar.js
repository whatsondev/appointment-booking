import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/images/WhatsOn_Agency-.png';
import './Navbar';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <>
        <li><Link to="/appointment">Home</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>
        }
    </>
    return (

        <div className="navbar  flex justify-between container main-navbar">
            <div className="navbar-start container">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow   w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} className="max-w-sm rounded-lg w-56	h-auto" alt='logo' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-0">
                    {menuItems}
                </ul>
            </div >
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="navbar-end">
                <a href="https://" className='btn'>Let’s Talk</a>
            </div>

        </div>

    );
};

export default Navbar;