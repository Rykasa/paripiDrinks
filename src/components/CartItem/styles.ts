import styled from "styled-components";

export const Item = styled.div`
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  margin-bottom: .25rem;
  border-radius: .25rem;
  height: 4rem;
  gap: .5rem;
  font-size: 0.875rem;

  @media (min-width: 700px){
    font-size: 1rem;
  }
`;

export const ImageWrap = styled.div`
  height: 100%;
  flex: 2;
  border-radius: .25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;

  @media (min-width: 700px){
    flex: 1;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  flex: 4;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: .5rem 0;
`;

export const Title = styled.span`
  text-transform: uppercase;
  letter-spacing: .1rem;
`;

export const Amount = styled.span`
  font-size: .75rem;
  color: #f4c762;
  
  @media (min-width: 700px){
    font-size: .875rem;
  }
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const ButtonsWrap = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: .5rem;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  color: #fff;
  font-size: 1.5rem;
  border-color: transparent;
  cursor: pointer;
  display: flex;
  transition: all .3s ease-in-out;

  &:hover{
    color: #f4c762;
  }
`;

export const IncreaseButton = styled.button`
  font-size: 1.25rem;
  display: flex;
  background: none;
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    border-radius: 50%;
    background-color: #f4c762;
  }
`;

export const DecreaseButton = styled.button`
  font-size: 1.25rem;
  display: flex;
  background: none;
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    border-radius: 50%;
    background-color: #f4c762;
  }
`;