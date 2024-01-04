import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const links = [
        {title:"Loan", path:'/loan'},
        {title:"Company", path:'/company'},
        {title:"Partners", path:'/partners'},
        {title:"Support", path:'/support'},
        {title:"Login", path:'/login'},
    ]
  return (
    <div>
      {links.map((link, index)=>{
       
       return <Link key={index} to ={link.path}>
        {link.title}</Link>
     })}
    </div>
  )
}