//jshint esversion:8

import React from 'react';
import logo from './logo.svg';
import './App.css';

const statement = <h1> React is cool! </h1>;
 
const student = {
  firstName: 'ana',
  lastName: 'martinez'
};
 
const { firstName, lastName } = student;

const myFullName = "casemiro brito varela teixeira";

const allNames = myFullName.split(" ");

function capitalizeFirstLetter() {
  return `I have capitalized first letters: ${firstName[0].toUpperCase() + firstName.slice(1)} ${lastName[0].toUpperCase() + lastName.slice(1)}!`;
}
function capitalizeFirstAndLastName () {
  return `I have capitalized first and last name: ${allNames[0].toUpperCase()} ${allNames[1]} ${allNames[2]} ${allNames[3].toUpperCase()}`
}
function capitalizeFirstAndLastNameLetter () {
  return `I have capitalized first and last name letter: ${allNames[0][0].toUpperCase()}${allNames[0].slice(1)} ${allNames[3][0].toUpperCase()}${allNames[3].slice(1)}`
}
 
function App() {
  return (
    <div className="App">
      {statement}
 
      <h3>
        {/* You can turn this to {firstName} {lastName} */}
        Hi, {student.firstName} {student.lastName}!
      </h3>
 
      <h4>
        Here is uppercased: {firstName.toUpperCase()} {lastName.toUpperCase()}.
      </h4>
 
      <h4>{capitalizeFirstLetter()}</h4>

      <h3> {myFullName} </h3>

      <h4>{capitalizeFirstAndLastName()}</h4>

      <h4>{capitalizeFirstAndLastNameLetter()}</h4>

      <img src={logo} alt="logo" />


    </div>
  );
}

export default App;
