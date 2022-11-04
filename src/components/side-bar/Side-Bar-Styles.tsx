import styled from "styled-components";

export const SideBarContainer = styled.div`
    width:22%;
    height:100%;
    display:flex;
    background-color:#FFFFFF;
    border-right:1px solid #E4EBFA;
    flex-direction:column;
    
`
export const Logo = styled.img`
    margin-left:1.8rem;
`
export const LogoContainer = styled.div`
    width:100%;
    height:15%;
    display:flex;
    align-items:center;
`
export const BoardsContainer = styled.div`
    width:100%;
    height:200px;
    display:flex;
    overflow-x:scroll;  
    overflow-y:scroll;   
    flex-direction:column;
    list-style:none;
    ::-webkit-scrollbar{
    width:10px;
    height:10px;
}
::-webkit-scrollbar-track {
  background: #FFFFFF;
}
::-webkit-scrollbar-thumb {
  background: #585FC7;
  border-radius:15px;
}
::-webkit-scrollbar-thumb:hover {
  background: #A8A4FF;
}
::-webkit-scrollbar-corner{
    background: #FFFFFF;
}
`
export const AllBoard = styled.p`
    font-size:1.2rem;
    letter-spacing:2.4px;
    color:#828FA3;
    font-weight:700;
    margin-top:11%;
    margin-left:8%;
`
export const CreateNewBoard = styled.div`
 width:95%;
    height:5rem;
    display:flex;
    align-items:center;
    color:#585FC7;
    border:none;
    background-color: #fff;
    fill:#585FC7;
    font-size:1.5rem;
    cursor: pointer;
    font-weight:700;
    border-top-right-radius:30px;
    border-bottom-right-radius:30px;    
    :hover{
      background-color:#EEEFF9;
    }
    `
export const TittleButton = styled.p``