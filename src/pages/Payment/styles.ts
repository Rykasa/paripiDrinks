import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #272727;
  padding: 2rem 0;
  color: #fff;
`;

export const Heading = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  color: #f4c762;
  text-align: center;
  display: block;
  letter-spacing: .1rem;
  margin-bottom: 2rem;
`;

export const Center = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 900px;
`;

export const Title = styled.span`
  text-transform: capitalize;
  display: block;
  margin-bottom: 1rem;
  letter-spacing: .1rem;
`;

export const CardWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: .25rem 0rem;
  background: none;
  color: #f4c762;
  border: none;
  font-size: 1rem;
  letter-spacing: .1rem;
  cursor: pointer;
  transition: all .3s ease-in-out;
 
  &:hover{
    color: #fff;
  }
`;

export const PayButton = styled.button`
  display: block;
  margin: auto;
  margin-top: 2rem;
  padding: .25rem 1rem;
  border-radius: .25rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  border-color: #5203da;
  background: #5203da;
  color: #fff;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    box-shadow: 0 0 0 1rem inset #272727;
  }
`;