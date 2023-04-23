import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { handleNavigate } from "../../actions/actions";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { logout } from "../../actions/authentication";
import Cookies from "universal-cookie";
import Avatar from "boring-avatars";

export default function Navbar() {
  const menuRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [showMenu, setshowMenu] = useState(false);
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");
  const current_username = cookie.get("username");
  const handleShowMenu = () => {
    showMenu ? setshowMenu(false) : setshowMenu(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = searchRef.current!.value;
    navigate(`/search?post=${search}`);
    searchRef.current!.value = "";
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo-container">
          <button
            className="image-wrapper"
            onClick={() => handleNavigate(navigate, "/")}
          >
            <img src={logo} alt="" />
          </button>
          <p className="logo-text">Blogs</p>
        </div>
        <div className="search-wrapper">
          <form onSubmit={handleSearch}>
            <input ref={searchRef} type="text" className="input-field" />
          </form>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 p-3 bg-neutral100 flex items-center justify-center rounded-[4px]">
            <i className="ri-add-line"></i>
          </button>
          <div className="w-[1px] h-10 bg-neutral200"></div>
          {current_user ? (
            <div ref={menuRef} className="w-[210px] relative">
              <button
                onClick={handleShowMenu}
                className={`flex w-full items-center justify-between gap-2 cursor-pointer ${
                  showMenu && "bg-neutral100"
                } py-1 px-2 rounded-[4px]`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-neutral200 rounded-[50%]">
                    {" "}
                    <Avatar
                      size={"auto"}
                      name={current_username}
                      variant="bauhaus"
                      colors={[
                        "#92A1C6",
                        "#146A7C",
                        "#F0AB3D",
                        "#C271B4",
                        "#C20D90",
                      ]}
                    />
                  </div>
                  <p className="font-500 text-sm truncate">
                    {current_username}
                  </p>
                </div>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              {showMenu && <ProfileMenu />}
            </div>
          ) : (
            <div>
              <a
                href="/login"
                className="button primary-button truncate text-center"
              >
                Login
              </a>
              <a href="/sign-up" className="button tertiary-button truncate">
                Sign up
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ProfileMenu = () => {
  const cookie = new Cookies();
  const current_username = cookie.get("username");
  const handleLogout = () => {
    logout();
  };
  return (
    <ul className="profile-menu">
      <a href={`/profile/${current_username}`}>
        <li className="menu-item">
          <i className="ri-user-line"></i>
          <p>My Profile</p>
        </li>
      </a>
      <button className="w-full" onClick={handleLogout}>
        <li className="menu-item">
          <i className="ri-logout-box-r-line"></i>
          <p>Logout</p>
        </li>
      </button>
    </ul>
  );
};
