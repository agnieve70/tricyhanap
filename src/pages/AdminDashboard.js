import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'

function AdminDashboard() {
    return (
        <>
            <AdminNavbar />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3 px-5">
                        <AdminSidebar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard