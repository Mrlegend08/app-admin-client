import React from "react";

const SimpleContext = React.createContext();

const Provider = ({ children }) => {
    const [simpleContext, setSimpleContext] = React.useState([{
        id: 1,
        email: "simple@gmail.com",
        password: "simple",
        firstName: "Toshmat",
        lastName: "Toshmatov",
    },
    {
        id: 2,
        email: "simple2@gmail.com",
        password: "simple2",
        firstName: "Eshmat",
        lastName: "Eshmatov",
    }]
    )
    return (
        <SimpleContext.Provider value={{ simpleContext, setSimpleContext }}>
            {children}
        </SimpleContext.Provider>
    );
};

export { SimpleContext, Provider };