import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

export const Center = styled.div`
  width: 90vw;
  background-color: #fff;
  max-width: 550px;
  margin: auto;
  border-radius: .25rem;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: .25rem;
  right: .5rem;
  background: none;
  border-color: transparent;
  font-size: 1.75rem;
  color: #f4c762;
  cursor: pointer;
  display: flex;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: #5203da;
    border-radius: 50%;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: #373737;
  padding: 2rem 1rem;;
  border-radius: .25rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const CardInfo = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: .25rem;
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
`;

export const LabelTitle = styled.span`
  color: #272727;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: .25rem;
  display: block;

  span{
    font-size: .875rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: .1rem solid #f4c762;
  border-radius: .25rem;
  margin-bottom: 1rem;
  outline-color: #5203da;
  padding: .25rem .5rem;
  font-size: 1rem;
`;

export const DateInfo = styled.div`
  display: flex;
  gap: 8rem;
`;

export const Select = styled.select`
  width: 5rem;
  height: 2rem;
  border: .1rem solid #f4c762;
  outline-color: #5203da;
  border-radius: .25rem;
`;

export const ExpiryDateWrap = styled.div`
  display: flex;
  gap: .5rem;
`

export const Button = styled.button`
  background-color: #5203da;
  border-color: #5203da;
  border-radius: .25rem;
  padding: .25rem .1rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  letter-spacing: .1rem; 
  cursor: pointer;
  transition: all .3s ease-in-out;
  margin-top: 1rem;

  &:hover{
    background-color: #fff;
    color: #5203da;
  }
`;