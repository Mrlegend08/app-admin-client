import React from "react";

const AdminContext = React.createContext();

const Provider = ({ children }) => {
    const [adminContext, setAdminContext] = React.useState([{
        id: 1,
        email: "admin@gmail.com",
        password: "admin",
        deadline: "Berilmagan",
        firstName: "Bekmirza",
        lastName: "Ahadjonov",
    },
    {
        id: 2,
        email: "admin2@gmail.com",
        password: "admin2",
        deadline: "Berilmagan",
        firstName: "Javohir",
        lastName: "Umidjonov",
    }]
    )
    return (
        <AdminContext.Provider value={{ adminContext, setAdminContext }}>
            {children}
        </AdminContext.Provider>
    );
};

export { AdminContext, Provider };