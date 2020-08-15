import React from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

const authentication = e =>{
  e.preventDefault()
  const form = e.target

  const data={
    "email": form.email.value,
    "password": form.password.value
  }
  Axios.post('https://api-edteam.alejogs4.now.sh/login',data)
  .then(r=>{
    localStorage.setItem('token', r.data.token)
    window.location = "/"
  })
  .catch(e=>console.log(e))
}

const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center"> Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form_item">
            <label htmlFor="email">
              Correo electónico
              <input type="email" name="email" id="email" placeholder="email@host.com" required/>
            </label>
          </div>
          <div className="form_item">
            <label htmlFor="password">
              Contraseña
              <input type="password" name="password" id="password" placeholder="xxxxxxx" required/>
            </label>
          </div>
          <div className="form_item">
            <input type="submit" className="button full" value="Iniciar sesión"/>
          </div>
        <NavLink to="/registro">Registrate</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Login
