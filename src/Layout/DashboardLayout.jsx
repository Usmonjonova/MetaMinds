import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/hrPanel/Navbar';
import MainSidebar from '../components/hrPanel/MainSidebar';
import '../assets/styles/skin_color.css';
import '../assets/styles/style_rtl.css';
import '../assets/styles/style.css';
import '../assets/styles/vendors_css.css';
import '../assets/styles/color_theme.css';

const DashboardLayout = () => {
    return (
        <div data-theme="dark">
            <Navbar />
            <MainSidebar />
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="row">
                            <Outlet />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
