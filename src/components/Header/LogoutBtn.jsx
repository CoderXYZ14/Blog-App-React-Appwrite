import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);

  const logoutHandler = () => {
    setLoggingOut(true); // Show loading state
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className={`inline-block px-6 py-2 duration-200 rounded-full 
                  ${
                    loggingOut
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "hover:bg-blue-100 bg-white text-gray-900 hover:text-gray-700"
                  }`}
      onClick={logoutHandler}
      disabled={loggingOut}
    >
      {loggingOut ? "Logging out..." : "Logout"}
    </button>
  );
}

export default LogoutBtn;
