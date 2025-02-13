import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
import { getToken, getUser, logout } from "../utils/auth";

// profile
const ProfileMenu = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [User, setUser] = useState({});
  const [token, setToken] = useState();
 
  const getuser = async () => {
    const userData = await getUser();
    console.log("userData",userData)
    setUser(userData);
  }
 
  useEffect(() => {
    setToken(getToken());
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
            {User?.profile_picture ? (
              <img style={{ height : 50, width : 50 }}
                className="rounded-full"
                onClick={handleProfileClick}
                // src={`${MEDIA_URL}${User?.profile_picture}`}
                src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
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
