"use client";

import Navbar from "@/components/components_function/navbar";
import Search from "@/components/components_function/search";
import LoginRegister from "@/components/components_function/login_register";

import React, { useState } from 'react';

const NavBarAndSearchAndLoginAndRegister = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <Navbar 
        setOpenSearch={setOpenSearch} 
        setToggleForm={setToggleForm} />

      {openSearch && <Search setOpenSearch={setOpenSearch} />}

      {toggleForm && <LoginRegister setToggleForm={setToggleForm} />}
    </>
  )
}

export default NavBarAndSearchAndLoginAndRegister