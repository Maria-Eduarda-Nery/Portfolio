import styled from "styled-components"

//Estilização da Navegação
export const Nav = styled.nav`
background-color: black;
`

export const Ul = styled.ul`
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;

a{
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
}
`

//estilização do Inicío

export const SectionInicio = styled.section`
height: 80vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: black;

img {
    border-radius:50%
}

h2{
    color: white;
}

`

export const ContainerDivs = styled.section`
display: flex;
flex-direction: colum;
justify-content: space-evenly;
height: 40vh;

`

export const BoxInicio = styled.div`
display: flex;
flex-direction: colum;
justify-content: space-evenly;
aling-items: center;

`

export const BoxInicio2 = styled.div`
display: flex;
justify-content: space-evenly;

`