import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import "./header.css"
import { Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='apple-logo'>
            <AiFillApple size={50} />
            <p>Apple Bosok</p>
        </div>
        <nav>
            <ul className='nav-ul' type='none'>
                <li className='list'>
                  <NavLink  to={"/awal"}>Home</NavLink>
                </li>
                <li className='list'>
                  <NavLink  to={"/shop"}>Shop</NavLink> 
                </li>
                <li className='list'>
                  <NavLink to={"/about"}>About</NavLink> 
                </li>
            </ul>
        </nav>
    </header>
  )
}
