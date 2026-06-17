"use client";

import Navbar from "@/components/components_function/navbar";
import LoginRegister from "@/components/components_function/login_register";

import React, { useState } from 'react';

const NavBarAndSearchAndLoginAndRegister = () => {

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <Navbar setToggleForm={setToggleForm} />

      {toggleForm && <LoginRegister setToggleForm={setToggleForm} />}
    </>
  )
}

export default NavBarAndSearchAndLoginAndRegister