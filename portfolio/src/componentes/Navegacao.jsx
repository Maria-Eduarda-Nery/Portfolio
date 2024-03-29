import React from "react"
import Projetos from "./Projetos.jsx"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, link } from "react-router-dom"

function Navegacao () {
    return (
        <>
        <BrowserRouter>
           <S.Nav>
              <S.Ul>
                <li><Link to="/Home"> Inicio </Link></li>
                <li><Link to="/Sobre"> Sobre </Link></li>
                <li><Link to="/Projetos"> Projetos </Link></li>
              </S.Ul>
           </S.Nav>

           <Routes>

            <Route path="/Home" element={<Inicio />} />
            <Route path="Sobre" element={<Sobre />} />
            <Route path="Projetos" element={<Projetos />} />

           </Routes>
        </BrowserRouter>
        </>
    )
}

export default Navegacao









