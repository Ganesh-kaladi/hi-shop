import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 30px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 38px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 42px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
  }
`;

const Title = styled.div`
  margin-left: 24px;
  font-size: 1.6rem;
  margin-bottom: -0.6rem;
  color: #353536;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.911rem;
    margin-left: 14px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.977rem;
    margin-left: 14px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.133rem;
    margin-left: 14px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.53rem;
    margin-left: 14px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.677rem;
    margin-left: 14px;
  }
`;

const Grid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    gap: 0rem;
  }
`;

const SmallGrid = styled.div`
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 1rem;
  display: grid;
  position: relative;

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    gap: 0.6rem;
  }
`;

const Card = styled.div`
  border: 1px solid #9b9b9b;

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  padding: 1rem;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: #1c6e48;
  text-align: center;
`;

const Offer = styled.div`
  margin-top: -12px;
  width: 2rem;
  height: 2rem;
`;

const Discount = styled.span`
  height: 2rem;
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.856rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.911rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;

const ProductName = styled.p`
  margin-top: -8px;
  font-weight: bold;
  text-align: center;
  color: #474747;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.844rem;
  margin-bottom: 0.8rem;

  @media (max-width: 486px) {
    font-size: 0.745rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.7989rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.845rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.722rem;
    gap: 5px;
  }

  @media (min-width: 993px) and (max-width: 1058px) {
    font-size: 0.722rem;
    gap: 2px;
  }

  @media (min-width: 1059px) and (max-width: 1200px) {
    font-size: 0.8rem;
    gap: 2px;
  }
`;

const Button = styled.button`
  height: 1.4rem;
  width: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: unset;
  border: 1px solid #9b9b9b;
  border-radius: 6px;
  color: #2e2c2c;
  font-weight: 300;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #5c5b5b;
    color: #ffffff;
  }
`;

const menDeals = [
  {
    deal_name: "Men's Trendy Jeans",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/c_pad,w_540,h_540/v1745732107/jeans-m-16_u5gtq5.jpg",
  },
  {
    deal_name: "Premium Watches",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745732640/acc-men-1_rtp8bg.jpg",
  },
  {
    deal_name: "Leather Footware",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745732673/f-m-16_xgubma.jpg",
  },
  {
    deal_name: "t-shirts ",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745732759/t-shirt-m-5_l3glib.jpg",
  },
];

const womenDeals = [
  {
    deal_name: "Elegant Dresses ",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745733027/w-bottom-15_b0oucv.jpg",
  },
  {
    deal_name: "Designer Tops",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745733073/w-t-shirt-9_bqznz4.jpg",
  },
  {
    deal_name: "High Heels",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745733922/foot-1_xi72gj.jpg",
  },
  {
    deal_name: "t-shirts ",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745733915/acc-1_b5pvkl.jpg",
  },
];

const kidsDeals = [
  {
    deal_name: "Cute T-Shirts ",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745735249/top-1_aiisch.jpg",
  },
  {
    deal_name: "Colorful Sneakers ",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745735263/foot-1_m1bgff.jpg",
  },
  {
    deal_name: "Kids' Jeans",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745735280/bootm-1_ugjfpb.jpg",
  },
  {
    deal_name: "Cartoon Watches ",
    deal_percentage: 35,
    deal_img:
      "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1745735290/acc-1_cunrga.jpg",
  },
];

function Deals() {
  const navigate = useNavigate();
  return (
    <Section>
      <Title>Offers</Title>
      <Grid>
        <SmallGrid>
          {menDeals.map((el, index) => (
            <Card key={index}>
              <Image src={el.deal_img} alt="..." />
              <Span>
                <Offer>
                  <svg
                    viewBox="0 0 25.00 25.00"
                    fill="#09b93e"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#09b93e"
                    transform="rotate(0)"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.2"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.817 16.063V14.721C17.817 14.3887 17.949 14.07 18.184 13.835L19.133 12.886C19.6223 12.3967 19.6223 11.6033 19.133 11.114L18.184 10.165C17.949 9.93001 17.817 9.61131 17.817 9.27899V7.93599C17.817 7.24398 17.256 6.68299 16.564 6.68299H15.221C14.8887 6.68299 14.57 6.55097 14.335 6.31599L13.386 5.36699C12.8967 4.87767 12.1033 4.87767 11.614 5.36699L10.665 6.31599C10.43 6.55097 10.1113 6.68299 9.77899 6.68299H8.43599C8.1035 6.68299 7.78464 6.81514 7.54963 7.05034C7.31462 7.28554 7.18273 7.6045 7.18299 7.93699V9.27899C7.18299 9.61131 7.05097 9.93001 6.81599 10.165L5.86699 11.114C5.37767 11.6033 5.37767 12.3967 5.86699 12.886L6.81599 13.835C7.05097 14.07 7.18299 14.3887 7.18299 14.721V16.063C7.18299 16.755 7.74398 17.316 8.43599 17.316H9.77899C10.1113 17.316 10.43 17.448 10.665 17.683L11.614 18.632C12.1033 19.1213 12.8967 19.1213 13.386 18.632L14.335 17.683C14.57 17.448 14.8887 17.316 15.221 17.316H16.563C16.8955 17.3163 17.2144 17.1844 17.4496 16.9493C17.6848 16.7143 17.817 16.3955 17.817 16.063Z"
                        stroke="#09b93e"
                        strokeWidth="0.625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.78202 10.641C9.50715 10.3662 9.42492 9.95286 9.57366 9.59375C9.7224 9.23464 10.0728 9.00049 10.4615 9.00049C10.8502 9.00049 11.2006 9.23464 11.3494 9.59375C11.4981 9.95286 11.4159 10.3662 11.141 10.641C10.7657 11.0163 10.1573 11.0163 9.78202 10.641Z"
                        stroke="#ffffff"
                        strokeWidth="0.725"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.859 14.718C13.5841 14.4431 13.5019 14.0298 13.6506 13.6707C13.7994 13.3115 14.1498 13.0774 14.5385 13.0774C14.9272 13.0774 15.2776 13.3115 15.4263 13.6707C15.5751 14.0298 15.4928 14.4431 15.218 14.718C14.8427 15.0932 14.2343 15.0932 13.859 14.718Z"
                        stroke="#ffffff"
                        strokeWidth="0.725"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M15.218 9.28101L9.78101 14.719"
                        stroke="#ffffff"
                        strokeWidth="0.725"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </svg>
                </Offer>
                <Discount>upto {el.deal_percentage}% off</Discount>
              </Span>
              <ProductName>
                {el.deal_name}
                <Button onClick={() => navigate("/products")}>
                  <FaArrowRight />
                </Button>
              </ProductName>
            </Card>
          ))}
        </SmallGrid>
        <SmallGrid>
          {womenDeals.map((el, index) => (
            <Card key={index}>
              <Image src={el.deal_img} alt="..." />
              <Span>
                <Offer>
                  <svg
                    viewBox="0 0 25.00 25.00"
                    fill="#09b93e"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#09b93e"
                    transform="rotate(0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.2"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.817 16.063V14.721C17.817 14.3887 17.949 14.07 18.184 13.835L19.133 12.886C19.6223 12.3967 19.6223 11.6033 19.133 11.114L18.184 10.165C17.949 9.93001 17.817 9.61131 17.817 9.27899V7.93599C17.817 7.24398 17.256 6.68299 16.564 6.68299H15.221C14.8887 6.68299 14.57 6.55097 14.335 6.31599L13.386 5.36699C12.8967 4.87767 12.1033 4.87767 11.614 5.36699L10.665 6.31599C10.43 6.55097 10.1113 6.68299 9.77899 6.68299H8.43599C8.1035 6.68299 7.78464 6.81514 7.54963 7.05034C7.31462 7.28554 7.18273 7.6045 7.18299 7.93699V9.27899C7.18299 9.61131 7.05097 9.93001 6.81599 10.165L5.86699 11.114C5.37767 11.6033 5.37767 12.3967 5.86699 12.886L6.81599 13.835C7.05097 14.07 7.18299 14.3887 7.18299 14.721V16.063C7.18299 16.755 7.74398 17.316 8.43599 17.316H9.77899C10.1113 17.316 10.43 17.448 10.665 17.683L11.614 18.632C12.1033 19.1213 12.8967 19.1213 13.386 18.632L14.335 17.683C14.57 17.448 14.8887 17.316 15.221 17.316H16.563C16.8955 17.3163 17.2144 17.1844 17.4496 16.9493C17.6848 16.7143 17.817 16.3955 17.817 16.063Z"
                        stroke="#09b93e"
                        stroke-width="0.625"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.78202 10.641C9.50715 10.3662 9.42492 9.95286 9.57366 9.59375C9.7224 9.23464 10.0728 9.00049 10.4615 9.00049C10.8502 9.00049 11.2006 9.23464 11.3494 9.59375C11.4981 9.95286 11.4159 10.3662 11.141 10.641C10.7657 11.0163 10.1573 11.0163 9.78202 10.641Z"
                        stroke="#ffffff"
                        stroke-width="0.725"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.859 14.718C13.5841 14.4431 13.5019 14.0298 13.6506 13.6707C13.7994 13.3115 14.1498 13.0774 14.5385 13.0774C14.9272 13.0774 15.2776 13.3115 15.4263 13.6707C15.5751 14.0298 15.4928 14.4431 15.218 14.718C14.8427 15.0932 14.2343 15.0932 13.859 14.718Z"
                        stroke="#ffffff"
                        stroke-width="0.725"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M15.218 9.28101L9.78101 14.719"
                        stroke="#ffffff"
                        stroke-width="0.725"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </Offer>
                <Discount>upto {el.deal_percentage}% off</Discount>
              </Span>
              <ProductName>
                {el.deal_name}
                <Button onClick={() => navigate("/products")}>
                  <FaArrowRight />
                </Button>
              </ProductName>
            </Card>
          ))}
        </SmallGrid>
        <SmallGrid>
          {kidsDeals.map((el, index) => (
            <Card key={index}>
              <Image src={el.deal_img} alt="..." />
              <Span>
                <Offer>
                  <svg
                    viewBox="0 0 25.00 25.00"
                    fill="#09b93e"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#09b93e"
                    transform="rotate(0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.2"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.817 16.063V14.721C17.817 14.3887 17.949 14.07 18.184 13.835L19.133 12.886C19.6223 12.3967 19.6223 11.6033 19.133 11.114L18.184 10.165C17.949 9.93001 17.817 9.61131 17.817 9.27899V7.93599C17.817 7.24398 17.256 6.68299 16.564 6.68299H15.221C14.8887 6.68299 14.57 6.55097 14.335 6.31599L13.386 5.36699C12.8967 4.87767 12.1033 4.87767 11.614 5.36699L10.665 6.31599C10.43 6.55097 10.1113 6.68299 9.77899 6.68299H8.43599C8.1035 6.68299 7.78464 6.81514 7.54963 7.05034C7.31462 7.28554 7.18273 7.6045 7.18299 7.93699V9.27899C7.18299 9.61131 7.05097 9.93001 6.81599 10.165L5.86699 11.114C5.37767 11.6033 5.37767 12.3967 5.86699 12.886L6.81599 13.835C7.05097 14.07 7.18299 14.3887 7.18299 14.721V16.063C7.18299 16.755 7.74398 17.316 8.43599 17.316H9.77899C10.1113 17.316 10.43 17.448 10.665 17.683L11.614 18.632C12.1033 19.1213 12.8967 19.1213 13.386 18.632L14.335 17.683C14.57 17.448 14.8887 17.316 15.221 17.316H16.563C16.8955 17.3163 17.2144 17.1844 17.4496 16.9493C17.6848 16.7143 17.817 16.3955 17.817 16.063Z"
                        stroke="#09b93e"
                        stroke-width="0.625"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.78202 10.641C9.50715 10.3662 9.42492 9.95286 9.57366 9.59375C9.7224 9.23464 10.0728 9.00049 10.4615 9.00049C10.8502 9.00049 11.2006 9.23464 11.3494 9.59375C11.4981 9.95286 11.4159 10.3662 11.141 10.641C10.7657 11.0163 10.1573 11.0163 9.78202 10.641Z"
                        stroke="#ffffff"
                        stroke-width="0.725"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.859 14.718C13.5841 14.4431 13.5019 14.0298 13.6506 13.6707C13.7994 13.3115 14.1498 13.0774 14.5385 13.0774C14.9272 13.0774 15.2776 13.3115 15.4263 13.6707C15.5751 14.0298 15.4928 14.4431 15.218 14.718C14.8427 15.0932 14.2343 15.0932 13.859 14.718Z"
                        stroke="#ffffff"
                        stroke-width="0.725"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M15.218 9.28101L9.78101 14.719"
                        stroke="#ffffff"
                        stroke-width="0.725"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </Offer>
                <Discount>upto {el.deal_percentage}% off</Discount>
              </Span>
              <ProductName>
                {el.deal_name}
                <Button onClick={() => navigate("/products")}>
                  <FaArrowRight />
                </Button>
              </ProductName>
            </Card>
          ))}
        </SmallGrid>
      </Grid>
    </Section>
  );
}

export default Deals;
