import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  h1 {
    margin-right: 60%;
    padding: 4px;
  }
`;
export const Container = styled.div`
  width: 70%;
  display: flex;
  min-height: 80px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  object-fit: contain;
  img {
    width: 50%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Amount = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h2 {
    font-weight: 700;
    margin-left: 70%;
    padding: 2px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
