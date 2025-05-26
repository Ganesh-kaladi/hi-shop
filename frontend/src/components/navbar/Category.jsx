import styled from "styled-components";
import { useQueryFields } from "../../assets/logics/advanceFiltering";

const Section = styled.section`
  margin-bottom: 2rem;

  @media (max-width: 486px) {
    display: none;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    display: none;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 769px) and (max-width: 992px) {
    gap: 0.8rem;
  }
`;

const NavItem = styled.li`
  padding: 10px 14px;
  background-color: #e7e7e7;
  border-radius: 4px;
  color: #2b2929;
  letter-spacing: 1.4px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1rem;

  &:hover {
    background-color: #cecdcd;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 0.6rem;
    font-size: 0.7555rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

function Category() {
  const { handleQueryCategory } = useQueryFields();

  return (
    <Section>
      <Nav>
        <NavItem onClick={() => handleQueryCategory("topware")}>
          topware
        </NavItem>
        <NavItem onClick={() => handleQueryCategory("bottomware")}>
          bottomware
        </NavItem>
        <NavItem onClick={() => handleQueryCategory("jeans")}>jeans</NavItem>
        <NavItem onClick={() => handleQueryCategory("shorts")}>shorts</NavItem>
        <NavItem onClick={() => handleQueryCategory("t-shirts")}>
          t-shirts
        </NavItem>
        <NavItem onClick={() => handleQueryCategory("footware")}>
          footware
        </NavItem>
        <NavItem onClick={() => handleQueryCategory("sports")}>sports</NavItem>
        <NavItem onClick={() => handleQueryCategory("accessories")}>
          accessories
        </NavItem>
      </Nav>
    </Section>
  );
}

export default Category;
