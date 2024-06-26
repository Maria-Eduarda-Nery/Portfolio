import React from "react"
import {createGlobalStyle} from "styled-components"
import Navegacao from "./componentes/Navegacao.jsx"

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Calligraffitti", cursive;
 }
 `

 function App () {
  return (
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
 }
  
export default App
