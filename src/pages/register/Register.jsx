import React, { useState } from "react";
import "./Register.css";
import Cvlogo from "../../components/assets/Cvlogo.png";
import { LButton, NButton } from "../../components/buttons/Button";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const findUser = user.find(obj => (obj.email === formValues.email || obj.username === formValues.username));
    if (!formValues.username || !formValues.email || !formValues.password) {
        alert('Please fill up required fields!');
    } else if (findUser !== undefined) {
        alert('"User" or "Email" is already exist');
    } else {
        user.push(formValues);
        localStorage.setItem("registeredUsers", JSON.stringify(user));
        navigate('/login');
    }
  }

  return (
    <>
      <main className="register container">
        <section className="register__wrapper1">
          <div className="register__wrapper2">
            <img
              className="register__logo"
              src={Cvlogo}
              alt="Covape-19 Garage Logo"
            />
            <h1 className="register__title">
              Sign up to <br></br>Covape-19 Garage
            </h1>
            <form 
              className="register__form"
              onSubmit={handleRegister}
            >
              <input
                className="register__form-textarea"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
              <span className="error">Error</span>
              <input
                className="register__form-textarea"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="error">Error</span>
              <input
                className="register__form-textarea"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <span className="error">Error</span>
              <LButton displayText="Continue" />
            </form>
            <p className="register__description">
              Already using Covape-19 Garage?
            </p>
            <Link to='/login'><NButton displayText="Back to Login" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
