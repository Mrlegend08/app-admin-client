import React from 'react'
import "./index.scss"
// context
import { ApiContext } from "../../../context/ApiContext"

const RadEdtganlar = () => {
    const { api, setApi } = React.useContext(ApiContext)
    const [index, setIndex] = React.useState(-1)
    const [filter, setFilter] = React.useState([...api.filter((item) => item.status === "rad etilgan" || item.status === "Rad etilgan")])

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const [ignore] = evt.target.elements
        api.forEach((item, i) => {
            if (item === filter[index]) {
                api[i].ignore = ignore.value
            }
        })

        setApi([...api])
    }
    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Rad etgan foydalanuchilar</h1>
                    <hr />
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ismi</th>
                                <th scope="col">Familyasi</th>
                                <th scope="col">Otasini ismi</th>
                                <th scope="col">Telefon nomeri</th>
                                <th scope='col'>Manzil</th>
                                <th scope='col'>Sabab</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filter.map((item, i) =>
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.fatherName}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#enterSabab" onClick={() => setIndex(i)}>{item.ignore ? item.ignore : "Kiritish"}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal fade" id="enterSabab" tabindex="-1" aria-labelledby="enterSababLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="enterSababLabel">Sababni kiriting</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <div className="mb-3">
                                    <label className='mb-1' htmlFor="reasonInput">Sababni kiritish</label>
                                    <input className='form-control' type="text" id='reasonInput' name='ignore' required />
                                </div>
                                <button className='btn btn-primary w-100' data-bs-dismiss="modal">Sababni qo'shish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RadEdtganlar
