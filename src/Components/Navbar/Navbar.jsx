import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">Talent <span className='bg-warning p-2'>Sumo</span></Link>
                    <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 gap-2 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink onClick={handleClick} activeclassname='active' className="nav-link" aria-current="page" to="/">Create Interview</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={handleClick} className="nav-link" to="/access">Access Details</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={handleClick} className="nav-link" to="/notification">Notification & Message</NavLink>
                            </li>
                        </ul>
                        <NavLink onClick={handleClick} className="btn btn-warning search" to="/search"><i className="fa fa-search text-dark" aria-hidden="true"></i></NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;