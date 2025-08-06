import React from "react";
import Container from "../container/Container";
import LogoutBtn from "../Header/LogoutBtn";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      url: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-white w-full">
      <Container>
        <nav className="flex w-full">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {
              navItems.map((item) => (
                item.active ? (
                  
                  <li key={item.name}>
                    
                    <button className="inline-block px-2 py-1 sm:px-4 sm:py-1.5 rounded-lg duration-200 hover:bg-blue-600/80 text-[14px] hover:text-white sm:text-lg" onClick={() => navigate(item.url)}>
                      {item.name}
                    </button>
                  </li>
                ) : null
              ))
            }
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
