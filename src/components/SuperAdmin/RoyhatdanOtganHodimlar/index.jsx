import React from 'react'
import "./index.scss"

// contexts
import { AdminContext } from '../../../context/adminContext'
import { SimpleContext } from '../../../context/simpleContext'

const RoyhatdanOtganHodimlar = () => {
    const { adminContext, setAdminContext } = React.useContext(AdminContext)
    const { simpleContext, setSimpleContext } = React.useContext(SimpleContext)
    let id = 1;
    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Ro'yhatdan o`tgan barcha hodimlar</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Parol</th>
                                <th scope="col">Darajasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminContext.map((item, i) =>
                                id++ &&
                                <tr key={id}>
                                    <th scope="row">{id - 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>Admin Hodim</td>
                                </tr>
                            )}
                            {simpleContext.map((item, i) =>
                                id++ &&
                                <tr key={id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>Simple Hodim</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default RoyhatdanOtganHodimlar
