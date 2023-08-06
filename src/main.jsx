import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root'
import { Provider as ApiProvider } from './context/apiContext'
import { Provider as SimpleProvider } from './context/simpleContext'
import { Provider as SimpleApiProvider } from './context/simpleApiContext'
import { BrowserRouter } from "react-router-dom"
import { Provider as AdminProvider } from './context/adminContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApiProvider>
      <SimpleProvider>
        <SimpleApiProvider>
          <AdminProvider>
            <Root />
          </AdminProvider>
        </SimpleApiProvider>
      </SimpleProvider>
    </ApiProvider>
  </BrowserRouter>
)
