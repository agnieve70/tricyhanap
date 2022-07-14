import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'

function AdminUsers() {
  return (
    <>
            <AdminNavbar />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3 px-5">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h1>Users</h1>
                        <div className="row">
                            <div className="col-md-4">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="username">Name</label>
                                        <input type="text" name="username" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" />
                                    </div>
                                    <div className="form-group mb-2">
                                    <label htmlFor="password_confirmation">Password Confirmation</label>
                                        <input type="password" name="password_confirmation" id="password_confirmation" className="form-control" />
                                    </div>
                                    <button type='button' className="btn btn-primary">Save User</button> { " " }
                                    <button type='button' className="btn btn-secondary">Clear Fields</button>
                                </form>
                            </div>
                            <div className="col-md-8">
                                <table className="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Admin2</td>
                                            <td>admin2@gmail.com</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm">
                                                    <i className="fa fa-edit"></i>
                                                </button> { " " }
                                                <button className="btn btn-danger btn-sm">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Admin3</td>
                                            <td>admin3@gmail.com</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm">
                                                    <i className="fa fa-edit"></i>
                                                </button> { " " }
                                                <button className="btn btn-danger btn-sm">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default AdminUsers