import React from "react";
const ApiContext = React.createContext();
const Provider = ({ children }) => {
    const [api, setApi] = React.useState([{
        id: 1,
        lastName: "Abdullayev",
        firstName: "Abdulaziz",
        fatherName: "Abdulazizovich",
        phoneNumber: "998998989898",
        address: "Toshkent shahar",
        status: "Sotuv",
        date: "03.11.2021"
    },
    {
        id: 2,
        lastName: "Abdullayev",
        firstName: "Jonibek",
        fatherName: "Abdulazizovich",
        phoneNumber: "998998989432",
        address: "Fergana shahar",
        status: "Rad etilgan",
        date: "05.24.2023", 
        ignore: "Noto'g'ri ma'lumotlar"
    },
    {
        id: 3,
        lastName: "Abdullayev",
        firstName: "Abdulaziz",
        fatherName: "Abdulazizovich",
        phoneNumber: "998998989898",
        address: "Toshkent shahar",
        status: "Uchrashuv",
        date: "09.06.2022"
    },
    {
        id: 4,
        lastName: "Qodirov",
        firstName: "Ubaydulla",
        fatherName: "Behruzovich",
        phoneNumber: "99885589856",
        address: "Fargona viloyati",
        status: "Bog'lanib bo'lmadi",
        date: "28.02.2019"
    },
    {
        id: 5,
        lastName: "Qodirov",
        firstName: "Qodir",
        fatherName: "Behruzovich",
        phoneNumber: "99885589856",
        address: "Jizzax viloyati",
        status: "Sotuv",
        date: "31.03.2021"
    },
    {
        id: 6,
        lastName: "Ulug'bekov",
        firstName: "Ulug'bek",
        fatherName: "Murodovich",
        phoneNumber: "99885589856",
        address: "Toshkent shahar",
        status: "Sotuv",
        date: "12.05.2021"
    },
    {
        id: 7,
        lastName: "G`ofurov",
        firstName: "Ulug`bek",
        fatherName: "Bahrom o'g'li",
        phoneNumber: "952558454",
        address: "Yozyovon tuman",
        status: "uchrashuv",
        date: "15.06.2023"
    },
    {
        id: 8,
        lastName: "G`ofurov",
        firstName: "Bekzod",
        fatherName: "Sherali o'g'li",
        phoneNumber: "952558454",
        address: "Bog'dod tuman",
        status: "Bog'lanib bo'lmadi",
        date: "16.04.2023"
    }
    ]);
    return (
        <ApiContext.Provider value={{ api, setApi }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, Provider };