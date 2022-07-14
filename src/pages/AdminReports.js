import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'

function AdminReports() {
  return (
    <>
    <AdminNavbar />
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-3 px-5">
                <AdminSidebar />
            </div>
            <div className="col-md-9">
                <h1>Reports</h1>
                <table className="table table-stripe">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Driver</th>
                                    <th>Passenger</th>
                                    <th>Reported Role</th>
                                    <th>Content</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Driver1</td>
                                    <td>Passenger1</td>
                                    <td>Driver</td>
                                    <td>Rude Driver</td>
                                    <td>07/14/2022</td>
                                    <td>
                                        <button className="btn btn-success btn-sm">Resolve <i className="fa fa-flag"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                <td>2</td>
                                    <td>Driver2</td>
                                    <td>Passenger2</td>
                                    <td>Passenger</td>
                                    <td>Did not pay exact amount</td>
                                    <td>07/14/2022</td>
                                    <td>
                                        <span className="badge bg-success">Resolved</span>
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

export default AdminReports