import React from 'react'
import "./index.scss"

// context
import { AdminContext } from '../../../context/adminContext'

const AdminHodimIshlari = () => {
    const { adminContext, setAdminContext } = React.useContext(AdminContext)
    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Admin Hodim ishlari</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Parol</th>
                                <th scope="col">Belgilangan Deadlinelar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminContext.map((item, i) =>
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.deadline}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminHodimIshlari
