import React from 'react'
import "./index.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiContext } from "../../../context/ApiContext"


const AddUser = () => {
    const { api, setApi } = React.useContext(ApiContext)
    const handleSubmit = (evt) => {
        evt.preventDefault();
        toast.success("Foydalanuvchi muvaffaqiyatli qo'shildi!")
        const [lastName, firstName, fatherName, phoneNumber, address] = evt.target.elements;
        const newUser = {
            id: api.length + 1,
            lastName: lastName.value,
            firstName: firstName.value,
            fatherName: fatherName.value,
            phoneNumber: phoneNumber.value,
            address: address.value,
            status: "Kiritilmagan",
            date: new Date().toLocaleDateString()
        }
        setApi([...api, newUser])
        console.log(api)
        evt.target.reset()
    };
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4 col-md-4 mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Foydalanuvchi qo`shish</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Familyani kiriting: </label>
                                    <input type="text" className="form-control" id='lastName' name='lastName' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Ismni kiriting: </label>
                                    <input type="text" className="form-control" id='firstName' name='firstName' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fatherName" className="form-label">Ochestvasini kiriting: </label>
                                    <input type="text" className="form-control" id='fatherName' name='fatherName' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Telefon raqam: </label>
                                    <input type="text" className="form-control" id='phoneNumber' name='phoneNumber' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Manzil: </label>
                                    <input type="text" className="form-control" id='address' name='address' />
                                </div>
                                <button className='btn btn-primary w-100'>Foydalanuvchini qo'shish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddUser
