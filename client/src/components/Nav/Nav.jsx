import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav() {
  return (
    <div>
    <ul className={style.container}>
      <li>
        <NavLink activeStyle={{ fontWeight: 'bold', color: 'red'}} to="/home">
          <button className={style.nav}>HOME</button>
        </NavLink>
      </li>
      <li>
        <Link to="/create">
          <button className={style.nav}>CREATE</button>
        </Link>
      </li>
    </ul>
    </div>
  )
}
