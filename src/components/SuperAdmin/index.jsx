import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import BadgeIcon from '@mui/icons-material/Badge';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SimpleHodimIshlari from './SimpleHodimIshlari';
import AdminHodimIshlari from './AdminHodimIshlari';
import RoyhatdanOtganHodimlar from './RoyhatdanOtganHodimlar';
import AdminHodimlar from './AdminHodimlar';
import SimpleHodimlar from './SimpleHodimlar';
const SuperAdmin = () => {
  if (localStorage.getItem("user") !== "super-admin") {
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
          <h1 className='simple-user__title'> <SupervisorAccountOutlinedIcon fontSize='large' /> User: Super Admin</h1>
          <hr />
          <div className="simple-user__sitebar-flex">
            <div className="simple-user__dashboard" >
              <Link to="/super-admin" className="simple-user__dashboard-title"> <BadgeIcon /> Simple Hodimlar ishlari</Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/super-admin" className="simple-user__dashboard-title"> <AdminPanelSettingsIcon /> Admin haqida ma'lumotlar </Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/super-admin" className="simple-user__dashboard-title"> <HowToRegIcon /> Ro'yhatdan o'tgan hodimlar</Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/super-admin" className="simple-user__dashboard-title"> <SupervisorAccountIcon /> Admin hodimlar </Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/super-admin" className="simple-user__dashboard-title"> <AssignmentIndIcon /> Simple hodimlar </Link>
            </div>
          </div>
        </div>
      </div>

      {dashboardActive === 1 ? <SimpleHodimIshlari /> : dashboardActive === 2 ? <AdminHodimIshlari /> : dashboardActive === 3 ? <RoyhatdanOtganHodimlar /> : dashboardActive === 4 ? <AdminHodimlar /> : <SimpleHodimlar />}
    </>
  )
}

export default SuperAdmin
