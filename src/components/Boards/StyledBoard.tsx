import styled from "styled-components";
interface Props{
    selected:any,
}
export const Container = styled.div`
    width:95%;
    height:5rem;
    display:flex;
    align-items:center;
    color:#828FA3;
    fill:#828FA3;
    border-top-right-radius:30px;
    cursor: pointer;
    border-bottom-right-radius:30px;
    :hover{
      background-color:#EEEFF9;
      color:#585FC7;
      fill:#585FC7;
    }

`

export const TittleTask = styled.p`
    font-size:1.5rem;

    :hover{
      color:#585FC7;
    }
    `