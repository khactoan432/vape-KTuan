/** @format */
import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

export default function Menu({ openDrawMenu, handleToggle }) {
  const DrawerList = (
    <Box sx={{ width: "250px" }} role='presentation' onClick={handleToggle}>
      <List>
        <nav className='mobile__wrapper'>
          <ul className='mobile__menu'>
            <li>
              <Link className='mobile__link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/juice'>
                E-Juice
              </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/mods-kids'>
                Mods & Kids
              </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/pods'>
                Pod System
              </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/atomizer'>
                Atomizer
              </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/accessories'>
                Accessories
              </Link>
            </li>
            <li>
              <a className='mobile__link' href='#contact'>
                Contact
              </a>
            </li>
            <li className='mobile__link-line'></li>
          </ul>
        </nav>
      </List>
    </Box>
  );

  return (
    <Drawer open={openDrawMenu} onClose={handleToggle}>
      {DrawerList}
    </Drawer>
  );
}
