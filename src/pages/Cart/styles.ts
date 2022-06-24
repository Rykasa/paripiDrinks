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

export const Item = styled.div`
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  margin-bottom: .25rem;
  border-radius: .25rem;
  height: 4rem;
  gap: .5rem;
  font-size: 0.875rem;
`;

export const ImageWrap = styled.div`
  height: 100%;
  flex: 2;
  background-color: red;
  border-radius: .25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
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

export const CloseButton = styled.button`
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