import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    // Descomentar comentarios si se usa objeto router en main.jsx
    // const error = useRouteError();
    // console.error(error)

  return (
    <div id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      {/* Descomentar lo siguiente si se usa objeto router en main.jsx*/}
      {/* <i>{error.statusText || error.message}</i> */}
    </p>
  </div>
  )
}

export default ErrorPage