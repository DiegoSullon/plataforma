import React from 'react'
import Axios from 'axios'

const authentication = e =>{
  e.preventDefault()
  const form = e.target

  const data={
    "email": form.email.value,
    "name": form.name.value,
    "password": form.password.value
  }
  Axios.post('https://api-edteam.alejogs4.now.sh/signup',data)
  .then(r=>{
    console.log("User registered");
    window.location = "/login"
  })
  .catch(e=>alert("Add user error"))
}

const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center"> Registrate</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form_item">
            <label htmlFor="name">
              Nombre
              <input type="text" name="name" id="name" placeholder="Jorge Valdez" required/>
            </label>
          </div>
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
            <input type="submit" className="button full" value="Registrarse"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
