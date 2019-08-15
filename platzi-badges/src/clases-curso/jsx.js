// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi badges!'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const name = 'aomine'
const sum = (n1, n2) =>  n1 + n2

// JSX
// const jsx = <h1>Hello, Platzi Badges from React JSX!</h1>
// const jsx = <h1>Hola, soy { sum(3, 5) }</h1>
const jsx = <div>
  <h1>Hola, soy {name}</h1>
  <p>Soy Frontend Developer</p>
</div>


// REACT CREATE ELEMENT
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi')
// const element = React.createElement('h1', {}, `Hola soy ${name}`)
const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Sumando'),
  React.createElement('p', {}, `La suma es: ${sum(3, 5)}`)
)

// 
const container = document.getElementById('app')

// ReactDom.render(__qué__, __dónde__)
ReactDOM.render(jsx, container)