import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import { Link, useLocation } from "react-router-dom";

import {
  Nav,
  NavContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavBtnLink,
  NavItem,
  NavMenu,
  NavLinks,
  NavItemBtn,
} from "./HeaderStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation(); // React Router's useLocation hook

  const handleClick = () => setClick(!click);

  const scrollTo = (id) => {
    setClick(false);

    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Define your route names and paths
  const routes = [
    {
      path: "/",
      text: "Home",
      id: "Home",
    },
    {
      path: "/phoneTransfer",
      text: "Phone Transfer",
      id: "phone",
    },
    {
      path: "/services",
      text: "Services",
      id: "services",
    },
    {
      path: "/products",
      text: "Products",
      id: "products",
    },
    {
      path: "/help",
      text: "Help",
      id: "help",
    },
  ];

  // Find the matching route based on the current location

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/" onClick={handleClick}>
            <NavIcon />
            CurrencySwapPro
          </NavLogo>

          <IconContext.Provider value={{ style: { color: "#fff" } }}>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </IconContext.Provider>

          <NavMenu onClick={handleClick} $click={click}>
            {routes.map((el, index) => (
              <NavItem key={index}>
                <NavLinks to={el.path} onClick={() => scrollTo(el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}

            <NavItemBtn>
              <NavBtnLink to="/sign-up">
                <Button onClick={handleClick}>Join</Button>
              </NavBtnLink>
            </NavItemBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
