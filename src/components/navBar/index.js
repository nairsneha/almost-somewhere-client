import React, {useState } from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const mystyle = {
        marginLeft: '50%'
    };
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem('allmostsomewhere-isLoggedIn');
        localStorage.removeItem('allmostsomewhere-username');
        localStorage.removeItem('allmostsomewhere-token');
        navigate('/login');

    }
    const isLoggedIn=localStorage.getItem('allmostsomewhere-isLoggedIn');
    const username=localStorage.getItem('allmostsomewhere-username');
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30"
                         className="d-inline-block align-top" alt="" />
                    &nbsp;AlmostSomewhere
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {isLoggedIn===null?<>
                            <li className="nav-item">
                                <Link to='/signup' style={{ textDecoration: 'none' }}>
                                <a className="nav-link" >Sign Up</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <a className="nav-link" >Login</a>
                            </Link>
                            </li>
                        </>:<>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Welcome&nbsp;{username}!</a>
                            </li>
                            <li className="nav-item" style={{ textDecoration: 'none' }} onClick={()=>logout()}>
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                        </>}

                    </ul>
                    <form className="form-inline" style={mystyle}>
                        <div className="input-group">
                            <input type="text" className="form-control" size='35' />
                            <span className="input-group-btn"  >
    &nbsp; <button className="btn btn-primary" type="button">Search</button>
  </span>
                        </div>
                    </form>

                </div>
        </nav>

    </>)
}


export default NavBar;
