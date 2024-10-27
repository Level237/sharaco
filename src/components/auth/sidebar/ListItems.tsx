import { menus } from '@/data/sidebarData'
import React from 'react'

export default function ListItems() {

    
  return (
    <>
    {menus.map((menu)=>{
        return (
<div key={menu.id} className="nav-item">
                    <a className={`nav-link ${menu.items && "dropdown-toggle"} `} href="#navbarVerticalMenuPagesUsersMenu"  role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUsersMenu">
                    <i className={menu.icon} />
                      <span className="nav-link-title">{menu.menu}</span>
                    </a>
                    <div id="navbarVerticalMenuPagesUsersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="users.html.htm">Overview</a>
                      <a className="nav-link " href="users-leaderboard.html.htm">Leaderboard</a>
                      <a className="nav-link " href="users-add-user.html.htm">Add User <span className="badge bg-info rounded-pill ms-1">Hot</span></a>
                    </div>
                  </div>
        )
    })}
    </>
  )
}
