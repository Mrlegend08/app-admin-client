import React from 'react'
import "./index.scss"
import { ApiContext } from "../../../context/ApiContext"
import { SimpleApiContext } from '../../../context/simpleApiContext'
import "bootstrap/dist/js/bootstrap.bundle.min.js"


const OldUsers = () => {
  const { api, setApi } = React.useContext(ApiContext)
  const { simpleApiContext, setSimpleApiContext } = React.useContext(SimpleApiContext)
  const [search, setSearch] = React.useState(-1)
  const [deleteIndex, setDeleteIndex] = React.useState(-1)
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const [lastName, firstName, fatherName, phoneNumber, address, status] = evt.target.elements;
    const newUser = {
      id: api[search].id,
      lastName: lastName.value,
      firstName: firstName.value,
      fatherName: fatherName.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
      status: status.value,
      date: new Date().toLocaleDateString()
    }
    api[search] = newUser
    setApi([...api])
    simpleApiContext.filter((item, i) => {
      if (item.id === Number(localStorage.getItem("user"))) {
        if (status.value === "sotuv") {
          item.sotuv.push(newUser.id)
        } else if (status.value === "uchrashuv") {
          item.uchrashuv.push(newUser.id)
        } else if (status.value === "rad etilgan") {
          item.radEtilgan.push(newUser.id)
        } else if (status.value === "bog'lanib bo'lmadi") {
          item.boglanibBolmagan.push(newUser.id)
        }
      }
    })
    setSimpleApiContext([...simpleApiContext])
    console.log(simpleApiContext)
    evt.target.reset()
  };
  const handleDelete = () => {
    api.splice(deleteIndex, 1)
    setApi([...api])
  }
  return (
    <>
      <div className="row p-5">
        <div style={{ marginLeft: "260px" }} className="col-10">
          <h1>Dastlabki foydalanuvchilar</h1>
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
                <th scope="col">Holat</th>
                <th scope="col">Qo'shilgan vaqti</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {api.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.fatherName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.address}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                  <td><button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editUser" onClick={() => setSearch(index)}>Edit</button></td>
                  <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteUser" onClick={() => setDeleteIndex(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      // modal edit
      <div className="modal fade" id="editUser" tabIndex="-1" aria-labelledby="editUserLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editUserLabel">Edit user</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Familyasi</label>
                  <input type="text" className="form-control" name='lastName' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Ismi</label>
                  <input type="text" className="form-control" name='firstName' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Otasini ismi</label>
                  <input type="text" className="form-control" name='fatherName' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Telefon nomeri</label>
                  <input type="text" className="form-control" name='phoneNumber' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Manzili</label>
                  <input type="text" className="form-control" name='address' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Holat</label>
                  <select className='form-select' name="status">
                    <option value="sotuv">Sotuv</option>
                    <option value="uchrashuv">Uchrashuv</option>
                    <option value="bog'lanib bo'lmadi">Bog'lanib bo'lmadi</option>
                    <option value="rad etilgan">Rad etilgan</option>p
                  </select>
                </div>
                <button className='btn btn-primary w-100' data-bs-dismiss="modal">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      // modal delete
      <div className="modal fade" id="deleteUser" tabIndex="-1" aria-labelledby="deleteUserLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteUserLabel"> Foydalanuvchi o'chirilsinmi? </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex gap-3">
              <button type="button" className="btn btn-danger ms-auto" data-bs-dismiss="modal" onClick={() => handleDelete()}>Ha, o'chirilsin</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yo'q, o'chirilmasin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldUsers
