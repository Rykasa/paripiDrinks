import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const center = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: green;
  padding: .25rem .75rem;
  border-radius: .25rem;
`;

export const Title = styled.span`
  font-size: 1.5rem;
`;

export const IconWrap = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 1.75rem;
  margin: 0 .25rem;
`;