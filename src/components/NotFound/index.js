import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

export default function NotFound() {
  return (
    <div className={style.page}>
      <p>
        Sorry, we couldn&lsquo;t find this page
        <br />
        Go back <Link to="/">Home</Link>
      </p>
    </div>
  )
}
