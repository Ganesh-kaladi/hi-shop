import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddAddress from "../components/forms/AddAddress";
import { createOrder } from "../slice/orderSlice";
import { removeAllCart } from "../slice/cartSlice";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  font-family: "Segoe UI", sans-serif;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.6rem;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 60% 40%;
    gap: 1.6rem;
  }
`;

const AddressContainer = styled.div`
  background: #fff;
  border-radius: 16px;
`;

const P = styled.p`
  color: red;
  padding: 0.6rem;
`;

const CurAddress = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: #f8f8f8;
  box-shadow: 0 0 12px rgba(129, 126, 126, 0.322);
`;

const H5 = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 486px) {
    font-size: 0.828rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8778rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9118rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.111rem;
  }
`;

const AddressBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const Radio = styled.input`
  display: inline-block;
  margin-top: 8px;
`;

const H6 = styled.h6`
  font-size: 1.166rem;
  font-weight: 500;
  margin-bottom: 0.3rem;

  @media (max-width: 486px) {
    font-size: 0.828rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8778rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9118rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.111rem;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.2rem;

  @media (max-width: 486px) {
    font-size: 0.808rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.851778rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.89118rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.9018rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.966rem;
  }
`;

const AddBtnContainer = styled.div`
  margin: 1.2rem 0;
`;

const AddBtn = styled.button`
  background-color: #0070f3;
  color: #fff;
  font-size: 0.957rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #0059c1;
  }

  @media (max-width: 486px) {
    font-size: 0.8177rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8577rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.8777rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.8977rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.9127rem;
  }
`;

const CartProduct = styled.div`
  margin-top: 2rem;
`;

const Product = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 0 12px rgba(129, 126, 126, 0.322);
`;

const ImageBox = styled.div`
  width: 5rem;
  height: 5rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
  background-color: #f5f5f5;
`;

const ProductText = styled.div`
  p {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
    span {
      margin-left: 0.5rem;
      font-weight: 400;
      color: #555;
    }
  }

  @media (max-width: 486px) {
    p {
      font-size: 0.82288rem;
    }
  }

  @media (min-width: 487px) and (max-width: 576px) {
    p {
      font-size: 0.8661188rem;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    p {
      font-size: 0.888rem;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    p {
      font-size: 0.93388rem;
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    p {
      font-size: 0.96688rem;
    }
  }
`;

const PaymentContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 580px;
`;

const PaymentDetals = styled.div`
  padding: 1rem;
  box-shadow: 0 0 12px rgba(129, 126, 126, 0.322);
  border-radius: 1rem;
`;

const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-align: center;

  @media (max-width: 486px) {
    font-size: 0.8977rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.937rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.977rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.088rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.21rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  color: #333;

  @media (max-width: 486px) {
    font-size: 0.8177rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8337rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.85577rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.889911rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.9011rem;
  }
`;

const SelectPayment = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #eee;
  box-shadow: 0 0 12px rgba(129, 126, 126, 0.322);
  border-radius: 1rem;
`;

const PaymentOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PaymentOption = styled.button`
  background-color: #f0f0f0;
  padding: 0.6rem 1rem;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;
  position: relative;
  color: #9b9797;
  border: 1px solid #81818152;

  &:hover {
    background-color: #ddd;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #3b3b3b89;
    transform: rotate(6deg);
    top: 50%;
    left: 0;
  }

  @media (max-width: 486px) {
    font-size: 0.83395rem;

    &::before {
      transform: rotate(6deg);
    }
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8595rem;

    &::before {
      transform: rotate(4deg);
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.895rem;

    &::before {
      transform: rotate(3deg);
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.911rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.933rem;

    &::before {
      transform: rotate(7deg);
    }
  }
`;

const CashOnDel = styled.button`
  background-color: #e7e6e6;
  padding: 0.6rem 1rem;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;
  position: relative;
  color: #555555;
  border: 1px solid #81818152;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 486px) {
    font-size: 0.83395rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8595rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.895rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.911rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.933rem;
  }
`;

const CODradio = styled.div`
  padding-left: 0.8rem;
`;

const CODinput = styled.input`
  margin-right: 8px;
`;

const PlaceOrderBtn = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #eee;
`;

const PlaceBtn = styled.button`
  width: 100%;
  background: #0070f3;
  color: #fff;
  font-size: 0.966rem;
  font-weight: 600;
  padding: 0.8rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #0059c1;
  }

  @media (max-width: 486px) {
    font-size: 0.83395rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8595rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.895rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.911rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.933rem;
  }
`;

function PlaceOrder() {
  const { cart } = useSelector((state) => state.cart);
  const { address, token } = useSelector((state) => state.auth);
  const { bagTotal, discount, shippingCharge, gstAmt, totalAmt } = useSelector(
    (state) => state.checkOut
  );
  const [add, setAdd] = useState({});
  const [checkError, setCheckError] = useState({ addressErr: "", mopErr: "" });
  const [openAdd, setOpenAdd] = useState(false);
  const [openRadio, setOpenRadio] = useState(false);
  const [MOP, setMOP] = useState({ mop: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(cart?.length <= 0);
  // if (cart?.length <= 0) {
  //   navigate("/products");
  // }

  function handleAdd(e) {
    const { value } = e.target;
    const flteredAddress = address.find((el) => el._id === value);
    setAdd(flteredAddress);
  }

  async function handlePlaceOrder() {
    const products = await cart.map((el) => ({
      product: el.product._id,
      quantity: el.quantity,
      size: el.size,
      color: el.color,
    }));

    if (Object.keys(add).length <= 0) {
      setCheckError((cur) => ({
        ...cur,
        addressErr: "please select your address",
      }));
      alert("select address");
      return;
    } else {
      setCheckError((cur) => ({
        ...cur,
        addressErr: "",
      }));
    }

    if (MOP.mop === "") {
      setCheckError((cur) => ({ ...cur, mopErr: "please add payment method" }));
      return;
    }

    const data = {
      deliveryAddress: add,
      bagTotal,
      discount,
      gst: gstAmt,
      shippingCharge,
      totalAmt,
      products,
      paymentMode: MOP.mop,
    };

    try {
      const orderRes = await dispatch(createOrder({ data, token }));
      if (orderRes.payload?.status === "success") {
        toast.success("order placed");
        const ids = cart.map((el) => el._id);
        const removeRes = await dispatch(
          removeAllCart({ data: { ids }, token })
        );
        if (removeRes.payload?.status === "success") {
          navigate("/user/orders");
        }
      }
    } catch (err) {
      console.error("Order or cart removal error:", err);
    }
  }

  return (
    <Container>
      <Grid>
        {/* Left - Address & Products */}
        <AddressContainer>
          {!(checkError.addressErr === "") && <P>{checkError.addressErr}</P>}
          {address?.length > 0 ? (
            <CurAddress>
              <H5>Delivery Address</H5>
              {address?.map((el) => {
                return (
                  <AddressBox>
                    <Radio
                      type="radio"
                      name="add"
                      value={el._id}
                      onChange={handleAdd}
                    />
                    <Ul key={el._id}>
                      <Li>
                        <H6>
                          {el.firstName} {el.lastName}
                        </H6>
                      </Li>
                      <Li>{el.street}</Li>
                      <Li>{el.landmark}</Li>
                      <Li>{el.city}</Li>
                      <Li>{el.pincode}</Li>
                    </Ul>
                  </AddressBox>
                );
              })}
            </CurAddress>
          ) : (
            <AddAddress />
          )}

          <AddBtnContainer>
            <AddBtn onClick={() => setOpenAdd((cur) => !cur)}>
              + Add New Address
            </AddBtn>
          </AddBtnContainer>

          {openAdd && <AddAddress />}

          <CartProduct>
            {cart?.length > 0 &&
              cart?.map((el, i) => {
                return (
                  <Product key={i}>
                    <ImageBox>
                      <Image src={el.product.image[1]} />
                    </ImageBox>
                    <ProductText>
                      <p>
                        {el.product.title} <span>({el.quantity})</span>
                        <span> ---- ₹{el.product.price}/-</span>
                      </p>
                    </ProductText>
                  </Product>
                );
              })}
          </CartProduct>
        </AddressContainer>

        {/* Right - Payment */}
        <PaymentContainer>
          <PaymentDetals>
            <H4>Order Summary</H4>
            <PriceContainer>
              <span>Bag Total</span>
              <span>₹{bagTotal}/-</span>
            </PriceContainer>
            <PriceContainer>
              <span>Discount</span>
              <span>₹{discount}/-</span>
            </PriceContainer>
            <PriceContainer>
              <span>Delivery Charge</span>
              <span>₹{shippingCharge}/-</span>
            </PriceContainer>
            <PriceContainer>
              <span>GST</span>
              <span>₹{gstAmt}/-</span>
            </PriceContainer>
            <hr style={{ margin: "1rem 0" }} />
            <PriceContainer>
              <strong>Total</strong>
              <strong>₹{totalAmt}/-</strong>
            </PriceContainer>
          </PaymentDetals>

          <SelectPayment>
            <H4>Select Payment Method</H4>
            <PaymentOptionContainer>
              <PaymentOption>Credit/Debit Card</PaymentOption>
              <PaymentOption>Net Banking</PaymentOption>
              <PaymentOption>UPI</PaymentOption>
              <CashOnDel onClick={() => setOpenRadio((cur) => !cur)}>
                Cash on Delivery
              </CashOnDel>
              {openRadio && (
                <CODradio>
                  <CODinput
                    type="radio"
                    name="payment-mode"
                    value={"cash on delivery"}
                    onChange={(e) =>
                      setMOP((cur) => ({ ...cur, mop: e.target.value }))
                    }
                  />
                  cash on delevery
                </CODradio>
              )}

              {!(checkError.mopErr === "") && <P>{checkError.mopErr}</P>}
            </PaymentOptionContainer>{" "}
            <PlaceOrderBtn>
              <PlaceBtn onClick={handlePlaceOrder}>Place Order</PlaceBtn>
            </PlaceOrderBtn>
          </SelectPayment>
        </PaymentContainer>
      </Grid>
    </Container>
  );
}

export default PlaceOrder;
