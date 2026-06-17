"use client"
import NavBar from "./navbar";
import Search from "./search";
import { useState } from "react";

export default function NavbarAndSearch(){
    const [openSearch, setOpenSearch] = useState(false);
    return(
        <div>
            <NavBar setOpenSearch={setOpenSearch} />
            {openSearch && <Search setOpenSearch={setOpenSearch} />}
        </div>
    );
}