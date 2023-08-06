import React from 'react'
import "./index.scss"

// context
import { ApiContext } from "../../../context/ApiContext"

const CantConnect = () => {
  const { api, setApi } = React.useContext(ApiContext)
  const [index, setIndex] = React.useState(-1)
  const [filter, setFilter] = React.useState([...api.filter(item => item.status === "Bog'lanib bo'lmadi" || item.status === "bog'lanib bo'lmadi")])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const [status] = evt.target.elements
    api.map((item, i) => {
      if (item === filter[index]) {
        api[i].status = status.value
      }
    })
    setApi([...api])
    setFilter([...api.filter(item => item.status === "Bog'lanib bo'lmadi" || item.status === "bog'lanib bo'lmadi")])
    evt.target.reset()
  }
  return (
    <>
      <div className="row p-5">
        <div style={{ marginLeft: "260px" }} className="col-10">
          <h1>Bog'lanib bo'lmadi</h1>
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
                <th scope='col'>Holat</th>
                <th scope='col'>Holatni o'zgartirish</th>
                <th scope='col'>Qayta bog'lanish</th>
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
                  <td>{item.status}</td>
                  <td><button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setIndex(i)}>Holatni o'zgartirish</button></td>
                  <td><a className='btn text-decoration-none btn-primary' href={`tel: ${item.phoneNumber}`}>
                    Qayta aloqa
                  </a></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


      // modal
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">Yangi holatni tanlang</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className="mb-3">
                  <label className='mb-1' htmlFor="yangiHolat">Yangi holatni tanlash</label>
                  <select className='form-select' name="status" id="yangiHolat">
                    <option value="sotuv">Sotuv</option>
                    <option value="uchrashuv">Uchrashuv</option>
                    <option value="rad etildi">Rad etildi</option>
                  </select>
                </div>
                <button className='btn btn-primary w-100' data-bs-dismiss="modal">Yangi holat</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CantConnect
