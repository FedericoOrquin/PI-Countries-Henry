import styled from "styled-components";

export const WrapperSearchBox = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 15px;
  max-width: 50vw;
  left:10vw;
`;

export const Search = styled.div`
  position: relative;
  width: auto;
  height: 48px;
  background: #fff;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 3px #2b3743;
  overflow: hidden;
  
`;

export const IconLupa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
 
  cursor: pointer;
  
`;
export const ContainerInput = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px 0;
`;

export const ClearInput = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 15px;
  width: 15px;
  right: 25%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  display:inline-block;
  margin:15px;

`;
