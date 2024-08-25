import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
import { getToken, getUser, logout } from "../utils/auth";

const ProfileMenu = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [User, setUser] = useState([]);
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(getToken());
    async function getuser() {
      const userData = await getUser();
      setUser(userData);
    }
    getuser();
  }, []);

  const handleProfileClick = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setDropdownVisible(false);
    window.location.href = "/"; 
  };

  return (
    <div className="relative cursor-pointer button-center lg:mr-[15px] my-5 lg:my-0">
      {token ? (
        <OutsideClickHandler onOutsideClick={() => setDropdownVisible(false)}>
          <div className="relative">
            {User?.profile_picture_url ? (
              <img
                className="rounded-full"
                onClick={handleProfileClick}
                src={User?.profile_picture_url}
                alt="user"
              />
            ) : (
              <CgProfile size={40} color="grey" onClick={handleProfileClick} />
            )}
            {isDropdownVisible && (
              <div className="absolute mt-2 z-10 right-0 w-40 bg-white border rounded-xl shadow-lg">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-lg font-bold text-primary hover:bg-primary hover:text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      ) : (
          <a href="/login">
        <button className="button-phone lg:button px-10 py-4">
        Login
        </button>
        </a>
      )}
    </div>
  );
};

export default ProfileMenu;
