import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
  return (
    <div className='min-vh-100 h-100 min-vw-100 w-100 d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <h1>Opps </h1>
            <p>Sorry! an unexpected error has occurred</p>
            <i>{error.statusText || error.message}</i>
        </div>
    </div>
  )
}

export default ErrorPage