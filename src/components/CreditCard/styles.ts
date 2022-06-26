import styled from "styled-components";

export const container = styled.div<{isSelected: boolean}>`
  background-color: #5203da;
  padding: 1rem;
  width: 18rem;
  border-radius: .25rem;
  border: ${({isSelected}) => isSelected ? '.2rem solid #f4c762' : '.2rem solid #5203da'};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  @media (min-width: 580px){
    width: 20rem;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  top: .25rem;
  right: .25rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    color: #f4c762;
  }
`;


export const Logo = styled.div`
  font-size: 2rem;
`;

export const Number = styled.strong`
  letter-spacing: .1rem;
  height: 1rem;
`;

export const InfoDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Holder = styled.span`
  font-size: .875rem;
  text-transform: capitalize;
`;

export const ExpiryDate = styled.span`
  width: 2.5rem;
  height: 1.5rem;  
`;