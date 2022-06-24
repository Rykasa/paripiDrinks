import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #5203da;
`;

export const NavCenter = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Logo = styled.h3`
  font-size: 1.5rem;
  color: #fff;

  span{
    color: #f4c762;
  }
`;

export const Button = styled.button`
  background: none;
  border-color: transparent;
  cursor: pointer;
  color: #fff;
  position: relative;
  transition: all .3s ease-in-out;

  &:hover:nth-child(2){
    background-color: #fff;
    border-radius: 50%;
    color: #5203da;
  }

  span{
    color: #fff;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    padding: .75rem;
    background-color: #f4c762;
    top: -.5rem;
    right: -.7rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .875rem;
  }
`;