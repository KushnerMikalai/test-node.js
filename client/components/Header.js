import Link from 'next/Link'
import styled from 'styled-components';

export default () => (
  <Header>
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
  </Header>
);

const Header = styled.header`
  padding: 1rem 0;
`;
