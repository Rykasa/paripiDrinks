import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  margin: 1rem auto;
`;

export const Loader = styled.div`
  animation: load1 1.5s infinite ease-in-out;
  width: 2rem;
  height: 100%;
  background-color: #5203da;
  bottom: 0;
  position: absolute;

  &:nth-child(1){
    animation-delay: .2s;
  }

  &:nth-child(2){
    right: 7rem; 
    animation-delay: .4s;
  } 

  &:nth-child(3){
    left: 7rem;
    animation-delay: 0;
  }

  @keyframes load1 {
    0%,
    100%
    {
      height: 100%;
    }

    40%, 60%{
      height: 0;
    }
  }
`;