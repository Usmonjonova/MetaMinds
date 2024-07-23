import React from 'react'

// LOGO 
import avatar13 from '../../../assets/images/avatar-13.png'
import { Bell, Maximize, Menu, MessageCircle, Moon, Sliders, Sun } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUsers, faWarning } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

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
                        <li className="btn-group nav-item">
                            <a href="#" className="waves-effect waves-light nav-link push-btn btn-primary-light ms-0" data-toggle="push-menu" role="button">
                                <Menu />
                            </a>
                        </li>
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
                        <li className="dropdown notifications-menu btn-group">
                            <a href="#" className="waves-effect waves-light btn-primary-light svg-bt-icon bg-transparent" data-bs-toggle="dropdown" title="Notifications">
                                <Bell />
                                <div className="pulse-wave"></div>
                            </a>
                            <ul className="dropdown-menu animated bounceIn">
                                <li className="header">
                                    <div className="p-20">
                                        <div className="flexbox">
                                            <div>
                                                <h4 className="mb-0 mt-0">Notifications</h4>
                                            </div>
                                            <div>
                                                <a href="#" className="text-danger">Clear All</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="menu sm-scrol">
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faShoppingCart} className="text-info" /> Curabitur id eros quis nunc suscipit blandit.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faWarning} className='text-warning' /> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faUsers} className='text-danger' /> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faShoppingCart} className='text-success' /> In gravida mauris et nisi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faUser} className='text-danger' /> Praesent eu lacus in libero dictum fermentum.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faUser} className='text-primary' /> Nunc fringilla lorem
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faUser} className='text-success' /> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all</a>
                                </li>
                            </ul>
                        </li>
                        <li className="btn-group nav-item d-xl-inline-flex d-none">
                            <a href="#" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="" id="live-chat">
                                <MessageCircle />
                            </a>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                                <div className="d-flex pt-1 align-items-center">
                                    <div className="text-end me-10">
                                        <p className="pt-5 fs-14 mb-0 fw-700">Nil Yeager</p>
                                        <small className="fs-10 mb-0 text-uppercase text-mute">Admin</small>
                                    </div>
                                    <img src={avatar13} className="avatar rounded-circle bg-primary-light h-40 w-40" alt="" />
                                </div>
                            </a>
                        </li>
                        <li className="btn-group nav-item d-xl-inline-flex d-none">
                            <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon me-0">
                                <Sliders />
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar