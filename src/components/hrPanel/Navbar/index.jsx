import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

// LOGO 
import avatar13 from '../../../assets/images/avatar-13.png'


const Navbar = () => {
    const location = useLocation();
    const [HrEmail, setHrEmail] = useState(location.state?.key)

    return (
        <div className="main-header theme-primary">
            <div className="d-flex align-items-center logo-box justify-content-start">
                <a href="#" className="logo">
                    <h2>HR Panel</h2>
                </a>
            </div>
            <nav className="navbar navbar-static-top">
                <div className="app-menu">
                    <ul className="header-megamenu nav">
                        <li className="btn-group d-lg-inline-flex d-none">
                            <div className="app-menu">
                                <div className="search-bx mx-5">
                                    <form>
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit" id="button-addon3"><i className="icon-Search"><span className="path1"></span><span className="path2"></span></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-custom-menu r-side">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a href="#" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                                <div className="d-flex pt-1 align-items-center">
                                    <div className="text-end me-10">
                                        <p className="pt-5 fs-14 mb-0 fw-700">HR</p>
                                        <small className="fs-10 mb-0 text-uppercase text-mute">{HrEmail}</small>
                                    </div>
                                    <img src={avatar13} className="avatar rounded-circle bg-primary-light h-40 w-40" alt="" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar