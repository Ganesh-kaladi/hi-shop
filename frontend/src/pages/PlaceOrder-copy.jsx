import styled from "styled-components";

const Section = styled.section`
  margin-top: 2rem;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 2rem;
`;

const AddressContainer = styled.div`
  padding: 3rem;
`;

const CurAddress = styled.div`
  padding: 0 1rem;
  border: 1px solid #b3b0b07f;
`;

const H5 = styled.h5`
  font-size: 1.6rem;
  font-weight: lighter;
`;

const H6 = styled.h6`
  font-size: 1.6rem;
  font-weight: lighter;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  padding-left: 0.6rem;
`;

const AddBtnContainer = styled.div`
  margin-top: 1.6rem;
`;

const AddBtn = styled.button`
  background-color: #fff;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 0px #afafaf73;
  cursor: pointer;
`;

const CartProduct = styled.div`
  margin-top: 1.4rem;
`;

const Product = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const PaymentContainer = styled.div``;
const PaymentDetals = styled.div`
  padding: 1rem;
`;
const H4 = styled.h4`
  text-align: center;
  margin-bottom: 0.8rem;
`;
const PriceContainer = styled.div`
  margin-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
`;
const PriceName = styled.span``;
const Price = styled.span``;

const Line = styled.div`
  display: inline-block;
  margin-right: 4px;
  color: #666666;
  letter-spacing: 4px;
`;
const SelectPayment = styled.div`
  margin-top: 1.4rem;
  padding: 0 1rem;
`;

const PaymentOptionContainer = styled.div`
  margin-bottom: 0.4rem;
`;
const PaymentOption = styled.div`
  background-color: #bebbbb70;
  display: block;
  padding: 0.6rem 0 0.6rem 0.6rem;
  border-bottom: 1px solid #9c1414df;
  cursor: pointer;
`;

const PlaceOrderBtn = styled.div`
  padding: 1rem;
  /* margin-top: 1.4rem; */
  text-align: center;
`;
const PlaceBtn = styled.button`
  width: 100%;
  padding: 0.6rem 0;
`;

function PlaceOrder() {
  return (
    <Section>
      <Container>
        <Grid>
          <AddressContainer>
            <div>
              <CurAddress>
                <input type="radio" />
                <H5>addrees</H5>
                <Ul>
                  <Li>
                    <H6>name</H6>
                  </Li>
                  <Li>kakinada</Li>
                  <Li>East Godavari</Li>
                  <Li>AP</Li>
                  <Li>533001</Li>
                </Ul>
              </CurAddress>
              <AddBtnContainer>
                <AddBtn>+ add address</AddBtn>
              </AddBtnContainer>
              <CartProduct>
                <Product>
                  <div>image</div>
                  <p>
                    Black t-shirt<span>(2)</span>
                    <span>- ₹120/-</span>
                  </p>
                </Product>
                <Product>
                  <div>image</div>
                  <p>
                    Black t-shirt<span>(2)</span>
                    <span>- ₹120/-</span>
                  </p>
                </Product>
                <Product>
                  <div>image</div>
                  <p>
                    Black t-shirt<span>(2)</span>
                    <span>- ₹120/-</span>
                  </p>
                </Product>
              </CartProduct>
            </div>
          </AddressContainer>
          <PaymentContainer>
            <PaymentDetals>
              <H4>Order Summery</H4>
              <PriceContainer>
                <PriceName>bag total</PriceName>
                <Price>₹120/-</Price>
              </PriceContainer>
              <PriceContainer>
                <PriceName>discount</PriceName>
                <span>₹120/-</span>
              </PriceContainer>
              <PriceContainer>
                <PriceName>delivary</PriceName>
                <span>₹120/-</span>
              </PriceContainer>
              <PriceContainer>
                <PriceName>gst</PriceName>
                <span>₹120/-</span>
              </PriceContainer>
              <PriceContainer>
                <PriceName>order total</PriceName>
                <span>₹120/-</span>
              </PriceContainer>
              <PriceContainer>
                <PriceName>Amount Payable</PriceName>
                <span>₹120/-</span>
              </PriceContainer>
            </PaymentDetals>
            <SelectPayment>
              <H4>select payment mode</H4>
              <PaymentOptionContainer>
                <PaymentOption>Credit/ Debit Card</PaymentOption>
                <PaymentOption>NetBanking</PaymentOption>
                <PaymentOption>UPI</PaymentOption>
                <PaymentOption>Cash on Delivery</PaymentOption>
              </PaymentOptionContainer>
            </SelectPayment>
            <PlaceOrderBtn>
              <PlaceBtn>Place Order</PlaceBtn>
            </PlaceOrderBtn>
          </PaymentContainer>
        </Grid>
      </Container>
    </Section>
  );
}

export default PlaceOrder;
