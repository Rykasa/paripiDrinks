import styled from "styled-components";

export const container = styled.div`
  background-color: #5203da;
  padding: 1rem;
  width: 70%;
  border-radius: .25rem;
  
  border: .2rem solid #f4c762;
  display: flex;
  flex-direction: column;
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
`;

export const ExpiryDate = styled.span`
  width: 2.5rem;
  height: 1.5rem;  
`;