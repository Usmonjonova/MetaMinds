import React, { useState } from 'react';
import backgroundImg from '../../assets/images/bg-16.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        school_name: '',
        grade: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, password, school_name, grade } = formData;

    };

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
                                        <h2 className="text-primary fw-600">Get started with Us</h2>
                                        <p className="mb-0 text-fade">Register a new membership</p>
                                    </div>
                                    <div className="p-40">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-user"></i></span>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control ps-15"
                                                        placeholder="Full Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-email"></i></span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control ps-15"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-lock"></i></span>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control ps-15"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-home"></i></span>
                                                    <input
                                                        type="text"
                                                        name="school_name"
                                                        className="form-control ps-15"
                                                        placeholder="School Name"
                                                        value={formData.school_name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="text-fade ti-list"></i></span>
                                                    <input
                                                        type="number"
                                                        name="grade"
                                                        className="form-control ps-15"
                                                        placeholder="Grade"
                                                        value={formData.grade}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="checkbox">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                        <label htmlFor="basic_checkbox_1">I agree to the <a href="#" className="text-primary">Terms</a></label>
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <button type="submit" className="btn btn-primary w-p100 mt-10" >
                                                        REGISTER
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <p className="mt-15 mb-0 text-fade">Already have an account?<Link to='/login' className="text-primary ms-5">Sign In</Link></p>
                                        </div>
                                        <div className="text-center">
                                            <p className="mt-20 text-fade">- Register With -</p>
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
    );
};

export default Register;
