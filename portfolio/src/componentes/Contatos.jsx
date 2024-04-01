import React from "react"
import GitHub from "./imagemsportfolio/github.png"
import Linkedin from "./imagemsportfolio/linkedin.png"
import Instagram from "./imagemsportfolio/instagram.png"
import * as S from "./Style.jsx"

function Contatos () {
    return (

        <S.ContainerContatos>
            <S.BoxContatos>
                <h2>aqui estao meus contatos</h2>
            </S.BoxContatos>

            <S.BoxContatos2>
                <img1 src={GitHub} alt="" />
                <img2 src={Linkedin} alt="" />
                <img3 src={Instagram} alt="" />
            </S.BoxContatos2>

            <S.BoxContatos3>
                <form action="contatos"></form>
            </S.BoxContatos3>

        </S.ContainerContatos>


    )
}

export default Contatos