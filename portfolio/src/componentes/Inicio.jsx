import React from "react"
import Laptop from "./imagemsportfolio/laptop.png"
import Codigo from "./imagemsportfolio/codigo.png"
import Linkedin from "./imagemsportfolio/linkedin.png"
import Instagram from "./imagemsportfolio/instagram.png"
import GitHub from "./imagemsportfolio/GitHub.png"
import * as S from "./Style.jsx"

function Inicio () {
    return (

        <S.SectionInicio>
            <img src={Laptop} alt="Laptop aberto " />
            <img src={Codigo} alt="Codando no laptop"/>

            <S.ContainerDivs>
                <S.BoxInicio>
                  <h2>Ola meu nome e maria eduarda</h2>
                  <h2>venha conhecer um pouco mais sobre a miha trajetoria </h2>
                </S.BoxInicio>

                <S.BoxInicio2>
                    <img src={Instagram} alt=" logo do insta" />
                    <img src={Linkedin} alt="logo do linkedin" />
                    <img src={GitHub} alt="logo do github" />
                </S.BoxInicio2>
            </S.ContainerDivs>

        </S.SectionInicio>
    )
}

export default Inicio