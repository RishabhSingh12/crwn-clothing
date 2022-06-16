import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { db, getOrders } from "../../utils/firebase/firebase.utils";
import {
  OrderContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  Container,
  Amount,
  ButtonsContainer,
} from "./orders-items-styles";

const Orders = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (currentUser === null) {
  //     navigate("/auth", { replace: true });
  //   }
  // }, [currentUser]);
  useEffect(() => {
    // const fetchListing = async () => {
    //   const docRef = doc(db, "orders", currentUser.id);
    //   const docSnap = await getDoc(docRef);
    //   console.log(docSnap.exists());
    //   if (docSnap.exists()) {
    //     setListData(docSnap.data());
    //   }
    // };
    // fetchListing();

    const fetchListing = async () => {
      if (currentUser) {
        const docSnap = await getOrders(currentUser?.id);

        if (docSnap) {
          setListData(docSnap);
        }
      }
    };
    fetchListing();
  }, [currentUser]);

  let amt = 0;
  for (let i = 0; i < listData.length; i++) {
    if (currentUser?.id === listData[i].id) {
      amt += listData[i].amount;
    }
  }

  // console.log(listData);

  const handleClick = () => {
    navigate("/auth");
  };

  const shopDirectHandler = () => {
    navigate("/shop");
  };

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <>
      {currentUser ? (
        <>
          {listData.length > 0 ? (
            <div>
              <OrderContainer>
                <div
                  style={{
                    display: "flex",
                    width: "70%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h1>Your orders</h1>
                  <h5
                    style={{ fontWeight: "600" }}
                  >{`Order Id: ${currentUser.id}`}</h5>
                </div>
                {listData.map((item) =>
                  item.cartItems.map((c, idx) => (
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
                  ))
                )}
              </OrderContainer>
              <Amount>
                <h2>Amount Paid : {amt / 100}$</h2>
              </Amount>
            </div>
          ) : (
            <div
              style={{
                marginTop: "7%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>You do not have any orders</h1>
              <ButtonsContainer>
                <Button onClick={shopDirectHandler}>Shop Now</Button>
              </ButtonsContainer>
            </div>
          )}
        </>
      ) : (
        <OrderContainer>
          <h2>Please Sign In to continue</h2>
          <ButtonsContainer>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type="button"
              onClick={handleClick}
            >
              Back to login/signup
            </Button>
          </ButtonsContainer>
        </OrderContainer>
      )}
    </>
  );
};

export default Orders;
