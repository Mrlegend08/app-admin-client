import React from 'react'

const SimpleApiContext = React.createContext();
const Provider = ({ children }) => {
    const [simpleApiContext, setSimpleApiContext] = React.useState([
        {
            id: 1,
            aloqa: [1, 2, 3, 4],
            sotuv: [1],
            uchrashuv: [3],
            radEtilgan: [2],
            boglanibBolmagan: [4]
        },
        {
            id: 2,
            aloqa: [5, 6, 7, 8],
            sotuv: [5, 6],
            uchrashuv: [7],
            radEtilgan: [],
            boglanibBolmagan: [8]
        }
    ])
    return (
        <SimpleApiContext.Provider value={{ simpleApiContext, setSimpleApiContext }}>
            {children}
        </SimpleApiContext.Provider>
    )
}

export { SimpleApiContext, Provider }
