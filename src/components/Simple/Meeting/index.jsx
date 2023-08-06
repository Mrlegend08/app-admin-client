import React from 'react'
import "./index.scss"

// context
import { ApiContext } from "../../../context/ApiContext"
const Meeting = () => {
    const { api, setApi } = React.useContext(ApiContext)
    const [index, setIndex] = React.useState(0)

    const [filter, setFilter] = React.useState(api.filter(item => item.status === "Uchrashuv" || item.status === "uchrashuv"))

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const [time] = evt.target.elements
        api.filter((item, i) => {
            if (item === filter[index]) {
                item.time = time.value
            }
        })
        setApi([...api])
        evt.target.reset();
    }

    const handleSubmitWhere = (evt) => {
        evt.preventDefault();
        const [joy] = evt.target.elements;
        api.filter((item, i) => {
            if (item === filter[index]) {
                item.joy = joy.value
            }
        })
        console.log(api)
        setApi([...api])
        evt.target.reset();
    }

    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Uchrashuv</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ismi</th>
                                <th scope="col">Familyasi</th>
                                <th scope="col">Otasini ismi</th>
                                <th scope="col">Telefon nomeri</th>
                                <th scope='col'>Manzil</th>
                                <th scope='col'>Holat</th>
                                <th scope='col'>Uchrashuv vaqti</th>
                                <th scope='col'>Uchrashuv joyi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filter.map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.fatherName}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.status}</td>
                                    <td style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#enterTime" onClick={() => setIndex(i)}>{item.time ? item.time : "Kiritish"}</td>
                                    <td style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#enterWhere" onClick={() => setIndex(i)}>{item.joy
                                        ? item.joy
                                        : "Kiritish"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade" id="enterTime" tabIndex="-1" aria-labelledby="enterTimeLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="enterTimeLabel">Vaqtni kiriting</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Vaqtni kiriting:</label>
                                    <input type="time" className="form-control" name='time' id="recipient-name" required />
                                </div>
                                <button className='btn btn-primary w-100' data-bs-dismiss="modal">Vaqtni kiritish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="enterWhere" tabIndex="-1" aria-labelledby="enterWhereLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="enterWhereLabel">Joyni kiriting</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(evt) => handleSubmitWhere(evt)}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Joyni kiriting:</label>
                                    <input type="text" className="form-control" name='joy' id="recipient-name" required />
                                </div>
                                <button className='btn btn-primary w-100' data-bs-dismiss="modal">Joyni kiritish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meeting
