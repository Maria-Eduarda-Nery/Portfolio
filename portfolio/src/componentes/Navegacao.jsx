import React from "react"
import Projetos from "./Projetos.jsx"
import Inicio from "./Inicio.jsx"
import Logo from "./imagemsportfolio/logo.png"
import Sobre from "./Sobre.jsx"
import Contatos from "./Contatos.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao () {
    return (
        <>
        
        <BrowserRouter>
           <S.Nav>
              <S.Logo>
                <img src={Logo} alt="" />
              </S.Logo>
              <S.Ul>
                <li><Link to="/Home"> About me </Link></li>
                <li><Link to="/Sobre"> Resume </Link></li>
                <li><Link to="/Projetos"> Work </Link></li>
                <li><Link to="/contatos"> Get in Touch! </Link></li>
              </S.Ul>
           </S.Nav>

             <Routes>

              <Route path="/Home" element={<Inicio />} />
              <Route path="Sobre" element={<Sobre />} />
              <Route path="Projetos" element={<Projetos />} />
              <Route path="Contatos" element={<Contatos />} />

            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Navegacao









