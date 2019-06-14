import Link from "next/link";
import styled from "styled-components";

export default () => (
  <Header>
    <Container>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Nav>
    </Container>
  </Header>
);

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  padding: 1rem 0;
`;

const Nav = styled.nav`
  margin: 0 -1rem;
`;