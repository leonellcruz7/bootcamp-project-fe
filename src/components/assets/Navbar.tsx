import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";

export default function Navbar() {
  const menuRef = useRef(null);
  const [showMenu, setshowMenu] = useState(false);

  const handleShowMenu = () => {
    showMenu ? setshowMenu(false) : setshowMenu(true);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo-container">
          <div className="image-wrapper">
            <img src={logo} alt="" />
          </div>
          <p className="logo-text">Blogs</p>
        </div>
        <div className="search-wrapper">
          <input type="text" className="input-field" />
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 p-3 bg-neutral100 flex items-center justify-center rounded-[4px]">
            <i className="ri-add-line"></i>
          </button>
          <div className="w-[1px] h-10 bg-neutral200"></div>
          <div ref={menuRef} className="w-[210px] relative">
            <button
              onClick={handleShowMenu}
              className={`flex w-full items-center justify-between gap-2 cursor-pointer ${
                showMenu && "bg-neutral100"
              } py-1 px-2 rounded-[4px]`}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-neutral200 rounded-[50%]"></div>
                <p className="font-500 text-sm truncate">Leonell Cruz</p>
              </div>
              <i className="ri-arrow-down-s-line"></i>
            </button>
            {showMenu && <ProfileMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileMenu = () => {
  return (
    <ul className="profile-menu">
      <li className="menu-item">
        <i className="ri-user-line"></i>
        <p>My Profile</p>
      </li>
      <li className="menu-item">
        <i className="ri-logout-box-r-line"></i>
        <p>Logout</p>
      </li>
    </ul>
  );
};