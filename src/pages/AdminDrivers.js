import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'

function AdminDrivers() {
    return (
        <>
            <AdminNavbar />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3 px-5">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h1>Drivers</h1>
                        <table className="table table-stripe">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Driver1</td>
                                    <td>driver1@gmail.com</td>
                                    <td>
                                        <span className="badge bg-success">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Driver2</td>
                                    <td>driver2@gmail.com</td>
                                    <td>
                                        <span className="badge bg-success">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Driver3</td>
                                    <td>driver3@gmail.com</td>
                                    <td>
                                        <span className="badge bg-danger">In Active</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDrivers