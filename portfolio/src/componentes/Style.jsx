import styled from "styled-components"

//Estilização da Navegação
export const Nav = styled.nav`
background-color: #efe2f5;
height: 12vh;
display: flex;

`
export const Logo = styled.section`
display: flex;
height: 10vh ;
`

export const Ul = styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
align-items: center;
width: 60rem;

a{
    font-size: 1.6rem;
    color: #963cbd;
    text-decoration: none;
}
`

//estilização do Inicío

export const SectionInicio = styled.section`
display: flex;
background-color: white;
width: 100%;
height: 90vh;
`
export const BoxInicio = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
width: 35rem;
height: 90vh;
margin-left: 5rem;

h1{
    color: #963cbd;
    font-size: 3.5rem;
    height: 10rem;
    width: 40rem;
    text-align: left;
    margin-top: 9%;
//font-family: Playfair Display, Bold 700;
}

h2 {
    font-size: 1.5rem;
    margin-block-end: 5%;
}
`
export const BoxInicio2 = styled.div`
display: flex;
flex-direction: column;

h1{
    display:flex;
    font-size: 3.5rem;
    text-align: right;
    margin-left: 24rem;
    height: 1rem;
}
 button {
    display: flex;
    height: 100rem;
    width: 40rem;
    margin-top: 9%;
    margin-left: 10rem;
 }
`

export const ContainerDivs = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 40vh;

`

//estilo do contato
export const ContainerContatos = styled.section`
display: flex;
`

export const BoxContatos = styled.div`
display: flex;
justify-content: space-evenly;
height: 20vh;
`

export const BoxContatos2 = styled.div`
display: flex;
flex-direction: column;
justify-content: left;



img1{
    diplay: flex;
    height: 5rem;
    width: 5rem;
}
`

export const BoxContatos3 = styled.div`
display: flex;
`