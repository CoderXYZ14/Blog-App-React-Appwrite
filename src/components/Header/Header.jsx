import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <Logo width="70px" />
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus ? (
              <li>
                <LogoutBtn />
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-md bg-green-500 text-white text-sm font-medium hover:bg-green-600"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
