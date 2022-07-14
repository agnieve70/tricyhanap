import React from 'react'

function AdminSidebar() {
    return (
        <div class="d-grid gap-2">
            <a href="/admin-users" className="btn btn-primary">Users</a>
            <a href="/admin-drivers" className="btn btn-primary">Drivers</a>
            <a href="/admin-reports" className="btn btn-primary">Reports</a>
        </div>
    )
}

export default AdminSidebar