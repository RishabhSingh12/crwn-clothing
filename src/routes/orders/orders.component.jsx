import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { getOrders } from "../../utils/firebase/firebase.utils";
import OrderList from "./orderlist.component";
import { OrderContainer, ButtonsContainer } from "./orders.items-styles";

const Orders = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [listData, setListData] = useState([]);
  const [created, setCreated] = useState("");
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
      setLoading(true);
      if (currentUser) {
        const docSnap = await getOrders(currentUser?.id);

        if (docSnap) {
          // const items = docSnap.map((item) => item);
          // console.log(items);
          setListData(docSnap);
          setLoading(false);
        }
      }
    };
    fetchListing();
  }, [currentUser]);

  // let amt = 0;
  // for (let i = 0; i < listData.length; i++) {
  //   if (currentUser?.id === listData[i].id) {
  //     amt += listData[i].amount;
  //   }
  // }

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
      {loading ? (
        <Spinner />
      ) : currentUser ? (
        <>
          {listData.length > 0 ? (
            <div>
              <OrderContainer>
                <div
                  style={{
                    display: "flex",
                    width: "83%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: "400",
                  }}
                >
                  <h2>Your orders</h2>
                  <h5>{`Order Id: ${currentUser.id}`}</h5>
                </div>

                {listData.map((item, idx) => (
                  <OrderContainer key={idx}>
                    <OrderList item={item} />
                    <div
                      style={{
                        display: "flex",
                        width: "70%",
                        alignItems: "space-between",
                        justifyContent: "space-between",
                        marginBottom: "3%",
                        padding: "15px 0 90px 0",
                      }}
                    >
                      <span style={{ marginLeft: "-5%" }}>
                        {moment.unix(item.created).format("MM/D/YY ,  h:mma")}
                      </span>

                      <span
                        style={{
                          marginRight: "0%",
                          fontWeight: "500",
                        }}
                      >
                        Amount Paid : {item.amount / 100}$
                      </span>
                    </div>
                  </OrderContainer>
                ))}
              </OrderContainer>
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
