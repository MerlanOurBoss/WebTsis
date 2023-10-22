import React from "react";
import { MenuList } from "../helpers/MenuList";
import {MenuItem} from "../components/MenuItem";
import "../styles/Menu.css";
import { useState } from "react";

function Menu() {
  const[value,setValue] = useState('')

  const searchBurgers = MenuList.filter(menuItem => {
    return menuItem.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <input 
            type="text"
            className="search_name"
            placeholder="Burger name"
            onChange={(event) => setValue(event.target.value)} 
            />
      <div className="menuList">
        {searchBurgers.map((menuItem) => {
          return (
            <MenuItem data={menuItem} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;