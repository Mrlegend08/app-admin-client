import React from 'react'
import "./index.scss"

// contexts
import { SimpleContext } from '../../../context/simpleContext'

const SimpleHodimlar = () => {
    const { simpleContext, setSimpleContext } = React.useContext(SimpleContext)
    const [index, setIndex] = React.useState(-1)
    const [deleteIndex, setDeleteIndex] = React.useState(-1)
    const handleDelete = () => {
        simpleContext.splice(deleteIndex, 1)
        setSimpleContext([...simpleContext])
        setDeleteIndex(-1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const [firstName, lastName, email, password] = e.target.elements
        const newAdmin = {
            id: adminContext[index].id,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }
        simpleContext[index] = newAdmin
        setSimpleContext([...adminContext])
        setIndex(-1)
        e.target.reset()
    }
    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Admin hodimlar</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ism</th>
                                <th scope="col">Familiya</th>
                                <th scope="col">Email</th>
                                <th scope="col">Parol</th>
                                <th scope='col'>Edit</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {simpleContext.map((item, i) =>
                                <tr key={item.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td><button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#editAdmin" onClick={() => setIndex(i)}>Edit</button></td>
                                    <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteAdmin" onClick={() => setDeleteIndex(i)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="editAdmin" tabIndex="-1" aria-labelledby="editAdminLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editAdminLabel">Edit Admin</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Ism</label>
                                    <input defaultValue={simpleContext[index]?.firstName} type="text" name='firstName' className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Familiya</label>
                                    <input defaultValue={simpleContext[index]?.lastName} type="text" name='lastName' className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input defaultValue={simpleContext[index]?.email} type="email" name='email' className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Parol</label>
                                    <input defaultValue={simpleContext[index]?.password} type="password" name='password' className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" data-bs-dismiss="modal">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal delete */}
            <div className="modal fade" id="deleteAdmin" tabIndex="-1" aria-labelledby="deleteAdminLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h1 className="modal-title fs-5 text-white" id="deleteAdminLabel">Delete Admin</h1>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>Are you sure?</h1>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete()}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleHodimlar
