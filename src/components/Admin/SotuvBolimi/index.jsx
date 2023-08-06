import React from 'react'
import "./index.scss"


// context
import { ApiContext } from "../../../context/ApiContext"
const Sell = () => {
    const { api, setApi } = React.useContext(ApiContext)
    const [filter, setFilter] = React.useState(api.filter(item => item.status === "Sotuv" || item.status === "sotuv"))
    filter.sort((a, b) => {
        if (a.date.split(".")[2] > b.date.split(".")[2] && a.date.split(".")[1] > b.date.split(".")[1] && a.date.split(".")[0] > b.date.split(".")[0]) {
            return 1
        }
        if (a.date.split(".")[2] < b.date.split(".")[2] && a.date.split(".")[1] < b.date.split(".")[1] && a.date.split(".")[0] < b.date.split(".")[0]) {
            return -1
        }
        return 0
    })
    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Sotuv</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ismi</th>
                                <th scope="col">Familyasi</th>
                                <th scope="col">Otasini ismi</th>
                                <th scope="col">Telefon nomeri</th>
                                <th scope="col">Manzili</th>
                                <th scope="col">Yil</th>
                                <th scope='col'>Oy</th>
                                <th scope='col'>Kun</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filter.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.fatherName}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.date.split(".")[2]}</td>
                                    <td>{item.date.split(".")[1]}</td>
                                    <td>{item.date.split(".")[0]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Sell
