import styled from "styled-components";

export const WrapperDetails = styled.div`
  height: 100vh;
  background-color: rgb(100, 100, 150);
`;

export const ContainerDetails = styled.div`
  padding: 2rem;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;
  
`;
export const StyledCard = styled.div`
  width: 430px;
  height: 550px;
  margin: 20px 0 20px 4rem;
  border-radius: 20px;
  box-shadow: 5px 15px 25px 15px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  background-color:white;
`;

export const CircleContainer = styled.div`
  clip-path: circle(230px at center 0);
  text-align: center;
  & > img {
    width: 100%;
    height: 180px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit:contain;
    padding:10px;
  }
  object-fit:contain;
`;

export const ContainerInformation = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BackButton = styled.button`
  text-shadow: none;
  background-color:black;
  background-clip: text;
  border-color: white;
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 1.5rem;
  border: 2px solid white;
  border-radius: 2rem;
  padding: 0.1rem 0.85rem 0.25rem;
  position: relative;
  right: 60rem;
  top: -16.45rem;
  cursor:pointer;

`;

export const ContainerActivity = styled.div`
  width: 200px;
  height: 160px;
  padding: 1rem;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 5px 15px 25px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerActivities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
