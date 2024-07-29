import React from 'react'
import { Link } from 'react-router-dom'

const TableContents = () => {
    return (
        <div className="col-12">
            <div className="box">
                <div className="box-header">
                    <h4 className="box-title">7-sinf Adabiyot Mundarija</h4>
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
                                <tr>
                                    <td className="text-dark"><Link to={`/matematika/takrorlash`}>O'tilganlarni takrorlash</Link></td>
                                    <td>61</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableContents