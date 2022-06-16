import React from "react";
import {
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  Container,
} from "./orders.items-styles";

const OrderList = ({ item }) => {
  return item.cartItems.map((c, idx) => (
    <Container key={idx}>
      <ImageContainer>
        <img src={c.imageUrl} alt={c.name} />
      </ImageContainer>
      <BaseSpan> {c.name} </BaseSpan>
      <Quantity>
        <Value>Qty : {c.quantity}</Value>
      </Quantity>
      <BaseSpan> {c.price} $</BaseSpan>
    </Container>
  ));
};

export default OrderList;
