import React from 'react'
import { Command, Home, Mail, MessageCircle } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import custom24 from '../../../assets/images/custom-24.svg'

const MainSidebar = () => {


    return (
        <aside className="dark-skin main-sidebar theme-primary">
            <section className="sidebar position-relative">
                <div className="multinav">
                    <div className="multinav-scroll" style={{ height: "97%" }}>
                        <ul className="sidebar-menu" data-widget="tree">
                            <li>
                                <Link to='/dashboard'><Home /><span>Dashboard</span></Link>
                            </li>
                            <li>
                                <Link to='/vacancies'><Mail /><span>Vacancies</span></Link>
                            </li>
                            <li>
                                <Link to='/candidates'><Command /><span>Candidates</span></Link>
                            </li>
                        </ul>

                        <div className="sidebar-widgets">
                            <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                                <div className="text-center">
                                    <img src={custom24} className="sideimg p-5" alt="" />
                                    <h4 className="title-bx text-primary">Best HR</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default MainSidebar