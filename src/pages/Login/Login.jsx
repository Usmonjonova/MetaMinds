import React from 'react'
import backgroundImg from '../../assets/images/bg-16.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div
            className="hold-transition dark-skin theme-primary bg-img"
            style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            data-overlay="5"
        >
            <div className="container h-p100">
                <div className="row align-items-center justify-content-md-center h-p100">
                    <div className="col-12">
                        <div className="row justify-content-center g-0">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="bg-gray-800 rounded10 shadow-lg">
                                    <div className="content-top-agile p-20 pb-0">
                                        <h2 className="text-primary fw-600">Let's Get Started</h2>
                                        <p className="mb-0 text-fade">Sign in to continue to edulearn.</p>
                                    </div>
                                    <div className="p-40">
                                        <form action="index.html" method="post">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-user"></i></span>
                                                    <input type="text" className="form-control ps-15 " placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-lock"></i></span>
                                                    <input type="password" className="form-control ps-15" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="checkbox">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                        <label htmlFor="basic_checkbox_1">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="fog-pwd text-end">
                                                        <a className="text-primary fw-500 hover-primary"><i className="ion ion-locked"></i> Forgot pwd?</a><br />
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <Link to='/classroom'>
                                                        <button type="submit" className="btn btn-primary w-p100 mt-10">SIGN IN</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <p className="mt-15 mb-0 text-fade">Don't have an account? <Link to="/register" className="text-primary ms-5">Sign Up</Link></p>
                                        </div>

                                        <div className="text-center">
                                            <p className="mt-20 text-fade">- Sign With -</p>
                                            <p className="gap-items-2 mb-0">
                                                <a className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook-light" href="#"><i className="fa fa-facebook"></i></a>
                                                <a className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter-light" href="#"><i className="fa fa-twitter"></i></a>
                                                <a className="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram-light" href="#"><i className="fa fa-instagram"></i></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
