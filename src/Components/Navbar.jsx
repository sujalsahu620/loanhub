import styles from "../Styles/Navbar.module.css"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();
    const links = [
        {title:"Home", path:'/'},
        {title:"Loan", path:'/loan'},
        {title:"Company", path:'/company'},
        {title:"Partners", path:'/partners'},
        {title:"Support", path:'/support'},
        {title:"Login", path:'/login'},
    ]
  return (
    <div id={styles.Navbar}>
      {links.map((link, index)=>{
       
       return <Link key={index} to ={link.path}>
        {link.title}</Link>
     })}
     {/* <button onClick={()=>{(navigate("/loan"))}}>loanbtn</button>
     <button onClick={()=>{(navigate("/company"))}}>companybtn</button>
     <button onClick={()=>{(navigate("/login"))}}>loginbtn</button> */}
    </div>
  )
}