import React, { useState } from "react";
import Flag from "react-flagkit";
import { IconContext } from "react-icons";
import { AiOutlineCaretDown } from "react-icons/ai";
import DropdownList from "../DropdownList";
import { CurrencyDropdown, DropdownContainer } from "./DropdownStyles";

const Dropdown = ({ currency, setCurrency }) => {
  const [show, setShow] = useState(false);

  const closeDropdown = (el) => {
    setCurrency(el.cur);
    setShow(false);
  };

  return (
    <DropdownContainer>
      <CurrencyDropdown onClick={() => setShow(!show)}>
        {" "}
        {/* Toggle 'show' on click */}
        <Flag size={28} country={currency.slice(0, -1)} />
        <span>{currency}</span>
        <IconContext.Provider value={{ size: "1.3em", color: "#dfdfdf" }}>
          <AiOutlineCaretDown />
        </IconContext.Provider>
      </CurrencyDropdown>
      <DropdownList
        setCurrency={setCurrency}
        show={show}
        closeDropdown={closeDropdown}
      />
    </DropdownContainer>
  );
};

export default Dropdown;
