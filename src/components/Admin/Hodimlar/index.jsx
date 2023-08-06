import React from 'react'
import "./index.scss"

// context
import { SimpleApiContext } from '../../../context/simpleApiContext'
import { SimpleContext } from '../../../context/simpleContext'
import { ApiContext } from "../../../context/ApiContext"

const Hodimlar = () => {
    const { simpleApiContext, setSimpleApiContext } = React.useContext(SimpleApiContext)
    const { simpleContext, setSimpleContext } = React.useContext(SimpleContext)
    const [index, setIndex] = React.useState(-1)
    const { api, setApi } = React.useContext(ApiContext)
    let filter = [];
    if (index !== -1) {
        for (let i = 0; i < api.length; i++) {
            for (let j = 0; j < simpleApiContext[index].aloqa.length; j++) {
                if (api[i].id == simpleApiContext[index].aloqa[j]) {
                    filter.push(api[i]);
                }
            }
        }
    }

    return (
        <>
            <div className="row p-5">
                <div style={{ marginLeft: "260px" }} className="col-10">
                    <h1>Hodimlar</h1>
                    <hr />
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope='col'>Aloqa</th>
                                <th scope='col'>Sotuv</th>
                                <th scope='col'>Uchrashuv</th>
                                <th scope='col'>Rad etilgan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {simpleContext.map((item, i) =>
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#aloqaModal" onClick={() => setIndex(i)}>{simpleApiContext[i].aloqa.length} ta</td>
                                    <td style={{ cursor: "pointer" }}>{simpleApiContext[i].sotuv.length} ta</td>
                                    <td style={{ cursor: "pointer" }}>{simpleApiContext[i].uchrashuv.length} ta</td>
                                    <td style={{ cursor: "pointer" }}>{simpleApiContext[i].radEtilgan.length} ta</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="modal fade" id="aloqaModal" tabIndex="-1" aria-labelledby="aloqaModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="aloqaModalLabel">Aloqaga chiqilgan foydalanuvchilar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Ismi</th>
                                        <th scope="col">Familyasi</th>
                                        <th scope="col">Telefon nomeri</th>
                                        <th scope='col'>Holat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filter.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yopish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hodimlar
