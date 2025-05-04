import styled from "styled-components";
import { useQueryFields } from "../../assets/logics/advanceFiltering";

const Section = styled.section`
  margin-top: 20px;
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  padding: 10px 14px;
  background-color: var(--color-green-500);
  border-radius: 4px;
  color: var(--color-white);
  letter-spacing: 1.4px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-green-600);
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
