import Link from 'next/Link'
import styled from 'styled-components';

export default () => (
  <Container>
    <Header>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
    </Header>
  </Container>
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
