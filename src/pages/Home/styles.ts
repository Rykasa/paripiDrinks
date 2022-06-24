import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: #272727;
`;

export const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;

  strong{
    color: #f4c762;
  }
`;

export const SubHeading = styled.span`
  display: block;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: .2rem;
  margin-top: 1rem;
`;

export const Main = styled.main`
  width: 100%;
`;

export const MainCenter = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 900px;
`;

export const CocktailsDiv = styled.div`
  border-top: .5rem solid #5203da;
  padding-top: 2rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
`;