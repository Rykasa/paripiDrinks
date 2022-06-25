import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: #373737;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  `;

export const MainCenter = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 900px;
  background-color: #fff;
  padding: 2rem;
  border-radius: .25rem;
`;

export const Heading = styled.span`
  display: block;
  font-size: 1.75rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: .1rem;
  font-weight: bold;
  color: #f4c762;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const EmptyTitle = styled.span`
  text-align: center;
  display: block;
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: .1rem;
  font-weight: bold;
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: .2rem solid #5203da;
  margin-block: 1rem;
  color: #212121;
`;

export const InfoTitle = styled.span`
  letter-spacing: .1rem;
  font-weight: bold;
`;

export const InfoTotal = styled.strong`
  letter-spacing: .1rem;

  span{
    color: #f4c762;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: .1rem;
  background-color: #5203da;
  border-radius: .25rem;
  border-color: transparent;
  padding: .25rem .75rem;
  display: block;
  margin: auto;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    box-shadow: 0 0 0 1rem inset #fff;
    color: #5203da;
  }
`;