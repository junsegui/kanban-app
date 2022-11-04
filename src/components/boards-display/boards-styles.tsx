import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:85%;
display:flex;
flex-direction:row;
overflow-x:scroll;
overflow-y:scroll;
background-color:#F4F7FD;
::-webkit-scrollbar{
    width:10px;
    height:10px;
}
::-webkit-scrollbar-track {
  background: #2B2C37;
}
::-webkit-scrollbar-thumb {
  background: #585FC7;
  border-radius:15px;
}
::-webkit-scrollbar-thumb:hover {
  background: #A8A4FF;
}
::-webkit-scrollbar-corner{
    background: #2B2C37;
}
;
`
