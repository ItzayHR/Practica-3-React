import React from "react";
import '../COMPONENTS/Header.css';
import Logo from '../ASSETS/IMG/MercadoLibre.png' 

export default function Header()
{
    return(
        <div className = "Header">
            <img src = {Logo} className="img" alt="Mercado Libre Logo"/>
        </div>
    )
}