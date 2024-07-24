import { faComments, faPhone, faRemove, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Dummy data for contacts
const contacts = [
    { name: 'Aaron', role: 'Designer' },
    { name: 'Isaiah', role: 'Full Stack Developer' },
    { name: 'Cameron', role: 'Support Agent' },
    { name: 'Eli', role: 'Support Agent' },
    { name: 'Charles', role: 'Marketing Department' },
];

// Colors for each status
const statusColors = {
    Online: 'bg-success',
    'Last seen: 2 hours ago': 'bg-warning',
    'Last seen: 12 min ago': 'bg-info',
    'Online': 'bg-success',
    'Last seen: yesterday': 'bg-primary'
};

// ContactCard Component
const ContactCard = ({ name, status, role }) => {
    const initial = name.charAt(0);

    return (
        <div className="media align-items-center">
            <span className={`badge badge-dot ${statusColors[status]}`}></span>
            <a className={`avatar avatar-lg ${statusColors[status]}`} href="#">
                <strong>{initial}</strong>
            </a>

            <div className="media-body">
                <p>
                    <a href="#"><strong>{name}</strong></a>
                    <small className="sidetitle">{status}</small>
                </p>
                <p>{role}</p>

                <nav className="nav mt-2">
                    <a className="nav-link" href="#"><i className="fa fa-facebook"></i></a>
                    <a className="nav-link" href="#"><i className="fa fa-twitter"></i></a>
                    <a className="nav-link" href="#"><i className="fa fa-github"></i></a>
                    <a className="nav-link" href="#"><i className="fa fa-linkedin"></i></a>
                </nav>
            </div>

            <div className="media-right gap-items">
                <a className="media-action lead" href="#" data-bs-toggle="tooltip" title="Orders"><i className="ti-shopping-cart"></i></a>
                <a className="media-action lead" href="#" data-bs-toggle="tooltip" title="Receipts"><i className="ti-receipt"></i></a>
                <div className="btn-group">
                    <a className="media-action lead" href="#" data-bs-toggle="dropdown"><i className="ion-android-more-vertical"></i></a>
                    <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Profile</a>
                        <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faComments}></FontAwesomeIcon> Messages</a>
                        <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Call</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> Remove</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HrDashboard = () => {
    return (
        <section className="content">
            <h2>Candidates</h2>
            <div className="row">
                <div className="col-lg-9 col-md-8">
                    <div className="box">
                        <div className="media-list media-list-divided media-list-hover">
                            {contacts.map((contact, index) => (
                                <ContactCard
                                    key={index}
                                    name={contact.name}
                                    status={contact.status}
                                    role={contact.role}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HrDashboard;
