import styled from 'styled-components';

export const Button = styled.button`
height: 40px;
background-color: #fff;
border-radius: 25px;
box-shadow: 0 2px 7px #828282;
padding: 0 30px;
margin: 16px;
cursor: pointer;
color: #828282;
font-size: 14px;
transition: box-shadow 0.25s;

&:hover {
  box-shadow: 0 4px 7px #5D5D5D;
}
`
export const Section = styled.section`
width: 90vw;
margin: 0 auto;
`

export const Logo = styled.h1`
font-size: 32px;
font-weight: bold;
text-align: left;
font-family: 'Oswald';
`

export const Title = styled.h1`
margin: 60px;
`

export const GameOverTitle = styled.h1`
margin: 60px;
font-size: 3em;
color: red;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
`

export const Question = styled.p`
font-size: 28px;
`

export const Input = styled.input`
background-color: transparent;
border-radius: 0;
border: none;
border-bottom: 1px solid grey;
-webkit-appearance: none;
-moz-appearance: none;
font-family: inherit;
font-size: 1em;
width: 80%;
padding: 18px 0;
margin-bottom: 30px;

&:focus{
    opacity: 1;
    color: inherit;
    outline: none;
}
`