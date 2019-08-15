import React from 'react'

import './styles/Loading.css'

function Loading() {
  return (
    <div className="LoaderBalls">
      <div className="LoaderBalls__wrapper">
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
      </div>
    </div>
  )
} 

export default Loading