import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import NotificationsPausedOutlinedIcon from '@mui/icons-material/NotificationsPausedOutlined';
import AddUser from './AddUser';
import OldUsers from './oldUsers';
import Sell from './Sell';
import Meeting from './Meeting';
import CantConnect from './cantConnect';
import Ignore from './Ignore';


const Simple = () => {
    if (!localStorage.getItem("user")) {
        window.location.href = "/"
    }
    const [dashboardActive, setDashboardActive] = React.useState(1)
    const handleSubmit = () => {
        const elDashboard = document.querySelectorAll(".simple-user__dashboard")
        if (dashboardActive === 1) {
            elDashboard[0].classList.add("active")
        }
        elDashboard.forEach((el, index) => {
            el.addEventListener("click", () => {
                setDashboardActive(index + 1)
                elDashboard.forEach(element => {
                    elDashboard[0].classList.remove("active")
                    element.classList.remove("active")
                })
                el.classList.add("active")
            })
        })
    }
    setTimeout(handleSubmit, 1)
    return (
        <>
            <div className="simple-user">
                <div className="simple-user__sitebar">
                    <h1 className='simple-user__title'> <SupervisorAccountOutlinedIcon fontSize='large' /> User: Simple</h1>
                    <hr />
                    <div className="simple-user__sitebar-flex">
                        <div className="simple-user__dashboard" >
                            <Link to="/simple" className="simple-user__dashboard-title"> <PersonAddAltOutlinedIcon /> Foydalanuvchi qo`shish</Link>
                        </div>
                        <div className="simple-user__dashboard">
                            <Link to="/simple" className="simple-user__dashboard-title"> <ContactPageOutlinedIcon /> Dastlabki foydalanuvchilar </Link>
                        </div>
                        <div className="simple-user__dashboard">
                            <Link to="/simple" className="simple-user__dashboard-title"> <StorefrontOutlinedIcon /> Sotuv </Link>
                        </div>
                        <div className="simple-user__dashboard">
                            <Link to="/simple" className="simple-user__dashboard-title"> <MeetingRoomOutlinedIcon /> Uchrashuv </Link>
                        </div>
                        <div className="simple-user__dashboard">
                            <Link to="/simple" className="simple-user__dashboard-title"> <CancelOutlinedIcon /> Bog`lanib bo`lmaganlar</Link>
                        </div>
                        <div className="simple-user__dashboard">
                            <Link to="/simple" className="simple-user__dashboard-title"> <NotificationsPausedOutlinedIcon /> Rad etilgan</Link>
                        </div>
                    </div>
                </div>
                {dashboardActive === 1 ? <AddUser /> : dashboardActive === 2 ? <OldUsers /> : dashboardActive === 3 ? <Sell /> : dashboardActive === 4 ? <Meeting /> : dashboardActive === 5 ? <CantConnect /> : dashboardActive === 6 ? <Ignore /> : null}
            </div>
        </>
    )
}


export default Simple
