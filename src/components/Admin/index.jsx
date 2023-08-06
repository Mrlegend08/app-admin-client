import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import BadgeIcon from '@mui/icons-material/Badge';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Hodimlar from './Hodimlar';
import SotuvBolimi from './SotuvBolimi';
import RadEdtganlar from './RadEtganlar';
import Deadline from './Deadline';

const Admin = () => {
  if (!localStorage.getItem("admin")) {
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
          <h1 className='simple-user__title'> <SupervisorAccountOutlinedIcon fontSize='large' /> User: Admin</h1>
          <hr />
          <div className="simple-user__sitebar-flex">
            <div className="simple-user__dashboard" >
              <Link to="/admin" className="simple-user__dashboard-title"> <BadgeIcon /> Hodimlar ro'yhati</Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/admin" className="simple-user__dashboard-title"> <StorefrontOutlinedIcon /> Sotuv bo'limi </Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/admin" className="simple-user__dashboard-title"> <CancelOutlinedIcon /> Rad etgan foydalanuvchilar</Link>
            </div>
            <div className="simple-user__dashboard">
              <Link to="/admin" className="simple-user__dashboard-title"> <AccessTimeFilledIcon /> Deadline belgilash </Link>
            </div>
          </div>
        </div>
        {dashboardActive == 1 ? <Hodimlar /> : dashboardActive == 2 ? <SotuvBolimi /> : dashboardActive == 3 ? <RadEdtganlar /> : dashboardActive == 4 ? <Deadline /> : null}
      </div>
    </>
  )
}

export default Admin
