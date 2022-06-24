import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
`;

export const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-size: 2.5rem;
  font-weight: 400;
`;

export const Main = styled.main`
  width: 100%;
`;

export const MainCenter = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 900px;
`;

export const Form = styled.form`
  width: 100%;
  background-color: blueviolet;
  margin-block: 2rem;
  padding: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
`;

export const CocktailsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
`;