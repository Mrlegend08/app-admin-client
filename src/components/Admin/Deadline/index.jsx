import React from 'react'
import "./index.scss"


// simple context
import { SimpleContext } from "../../../context/simpleContext"
import { AdminContext } from '../../../context/adminContext'
const Deadline = () => {
    const { simpleContext, setSimpleContext } = React.useContext(SimpleContext)
    const { adminContext, setAdminContext } = React.useContext(AdminContext)
    const [index, setIndex] = React.useState(-1)


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const [deadline] = evt.target.elements
        simpleContext[index].deadline = deadline.value
        setSimpleContext([...simpleContext])
        adminContext[Number.localStorage.getItem("admin")].deadline = deadline.value + "gacha"
    }
    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Deadline</h1>
                    <hr />
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Password</th>
                                <th scope='col'>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {simpleContext.map((item, i) =>
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td style={{ cursor: "pointer" }} onClick={() => setIndex(i)} data-bs-toggle="modal" data-bs-target="#exampleModal">{item.deadline ? item.deadline : "Deadline kiritish"}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            // modal

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Deadline</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Deadline:</label>
                                    <input type="date" className="form-control" name='deadline' id="recipient-name" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" data-bs-dismiss="modal" >Saqlash</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Deadline
