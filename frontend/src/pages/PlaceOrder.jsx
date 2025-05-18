import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddAddress from "../components/forms/AddAddress";
import { createOrder } from "../slice/orderSlice";
import { removeAllCart } from "../slice/cartSlice";

const Section = styled.section`
  margin-top: 2rem;
  font-family: "Segoe UI", sans-serif;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

const AddressContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
`;

const P = styled.p`
  color: red;
  padding: 0.6rem;
`;

const CurAddress = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #f8f8f8;
`;

const H5 = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
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
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0.2rem;
`;

const AddBtnContainer = styled.div`
  margin-top: 1.2rem;
`;

const AddBtn = styled.button`
  background-color: #0070f3;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #0059c1;
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
  border-radius: 12px;
  align-items: center;
  margin-bottom: 1rem;
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
`;

const PaymentContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PaymentDetals = styled.div`
  padding: 2rem;
`;

const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  color: #333;
`;

const SelectPayment = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #eee;
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
    transform: rotate(10deg);
    top: 50%;
    left: 0;
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
`;

const CODradio = styled.div`
  padding-left: 0.8rem;
`;

const CODinput = styled.input`
  margin-right: 8px;
`;

const PlaceOrderBtn = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #eee;
`;

const PlaceBtn = styled.button`
  width: 100%;
  background: #0070f3;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #0059c1;
  }
`;

// form

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
    <Section>
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
                cart?.map((el) => {
                  return (
                    <Product>
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
              </PaymentOptionContainer>
            </SelectPayment>

            <PlaceOrderBtn>
              <PlaceBtn onClick={handlePlaceOrder}>Place Order</PlaceBtn>
            </PlaceOrderBtn>
          </PaymentContainer>
        </Grid>
      </Container>
    </Section>
  );
}

export default PlaceOrder;
