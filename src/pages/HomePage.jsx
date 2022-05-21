import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.scss';
import Img from '../assets/img.png';

const HomePage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);

  const validateInput = () => {
    if (
      password !== '' &&
      confirmPassword !== '' &&
      password !== confirmPassword
    ) {
      let error = document.getElementById('error--password');
      error.innerHTML = 'password do not match';
    }
    if (!email) {
      let error = document.getElementById('error');
      error.innerHTML = 'Please enter a valid email.';
    }
    if (!number) {
      let error = document.getElementById('error--number');
      error.innerHTML = 'Please enter a number.';
    }
    if (!name) {
      let error = document.getElementById('error--name');
      error.innerHTML = 'Please enter a name.';
    }
    if (!password) {
      let error = document.getElementById('error--pass');
      error.innerHTML = 'Please enter a password.';
    }
    if (!terms) {
      let error = document.getElementById('error--terms');
      error.innerHTML = 'Please accept the terms and conditions.';
    }
  };

  return (
    <div className="home">
      <div className="img-container">
        <img src={Img} alt="" className="img" />
        <div className="text-container">
          <h2 className="">Choose a date range</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quam adipisci nisi.
          </p>
        </div>
      </div>
      <div className="form-container">
        <h3 className="form-heading">Create an account</h3>

        <form action="" onSubmit={(e) => e.preventDefault()} className="form">
          <div className="form--item">
            <label className="label" htmlFor="email">
              Your email address
            </label>
            <input
              className="input"
              type="email"
              onBlur={() => {
                if (!email) {
                  let error = document.getElementById('error');
                  error.innerHTML = 'Please enter a valid email.';
                }
              }}
              onFocus={() => {
                let error = document.getElementById('error');
                error.innerHTML = '';
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="error"></div>
          </div>
          <div className="form--item">
            <label className="label" htmlFor="password">
              Your password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onFocus={() => {
                let error = document.getElementById('error--pass');
                error.innerHTML = '';
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="error--pass"></div>
          </div>
          <div className="form--item">
            <label className="label" htmlFor="confirm-password">
              Confirm your password
            </label>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onFocus={() => {
                let error = document.getElementById('error--password');
                error.innerHTML = '';
              }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div id="error--password"></div>
          </div>
          <div className="form--item">
            <label className="label" htmlFor="name">
              Your full name
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                if (!name) {
                  let error = document.getElementById('error--name');
                  error.innerHTML = 'Please enter a name.';
                }
              }}
              onFocus={() => {
                let error = document.getElementById('error--name');
                error.innerHTML = '';
              }}
            />
            <div id="error--name"></div>
          </div>
          <div className="form--item">
            <label className="label" htmlFor="number">
              Your phone number
            </label>
            <input
              className="input input--number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onBlur={() => {
                if (!name) {
                  let error = document.getElementById('error--number');
                  error.innerHTML = 'Please enter a number.';
                }
              }}
              onFocus={() => {
                let error = document.getElementById('error--number');
                error.innerHTML = '';
              }}
            />
            <div id="error--number"></div>
          </div>
          <div className="form--item form--item-terms">
            <input
              className="input input--checkbox"
              type="checkbox"
              value={terms}
              onChange={(e) => {
                if (e.target.checked) {
                  setTerms(true);
                } else {
                  setTerms(false);
                }
              }}
            />
            <label className="label label--terms" htmlFor="checkbox">
              I read and agree terms and conditions
            </label>
            <div id="error--terms"></div>
          </div>
          <button
            type="submit"
            className="form-button"
            onClick={() => {
              validateInput();
              if (
                email &&
                name &&
                number &&
                password === confirmPassword &&
                terms
              ) {
                navigate('/chart');
              }
            }}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
