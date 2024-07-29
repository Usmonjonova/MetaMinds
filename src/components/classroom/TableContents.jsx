import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function extractId(pathname) {
    const parts = pathname.split('/');
    return parts[parts.length - 1];
}

const pathname = "/classroom/1";
const id = extractId(pathname);
console.log(id);


const TableContents = () => {
    const location = useLocation()
    const url = `https://metamindsgroup.pythonanywhere.com/tests/subjects/${extractId(location.pathname)}/topics/`
    const [topics, setTopics] = useState()


    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0ODE2MjQzLCJpYXQiOjE3MjIyMjQyNDMsImp0aSI6ImM2MTJjZTZkYmUxZTRlYzJhMDYzNjU1MTFhNmIwYzQ3IiwidXNlcl9pZCI6NH0._vJgFPi0uUk0LKsEXgtiHubPDbD67-yEyg79hRMmVFk',

                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setTopics(data)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            console.log(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="col-12">
            <div className="box">
                <div className="box-header">
                    <h4 className="box-title">7th Grade Topic</h4>
                </div>
                <div className="box-body">
                    <div className="table-responsive">
                        <table id="complex_header" className="text-fade table table-bordered display" style={{ width: '100%' }}>
                            <thead>
                                <tr className="text-dark">
                                    <th rowSpan="6">Theme Title</th>
                                </tr>
                                <tr className="text-dark">
                                    <th rowSpan="6">Page</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    topics && topics.map((topic) => (
                                        <tr key={topic.id}>
                                            <td className="text-dark"><Link to={`/${topic.subject}/${topic.id}`}>{topic.name}</Link></td>
                                            <td>61</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableContents