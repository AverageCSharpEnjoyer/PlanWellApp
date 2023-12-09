import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx'
import 'semantic-ui-css/semantic.min.css'
import { Loader } from 'semantic-ui-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />}/>
  </React.StrictMode>
)
