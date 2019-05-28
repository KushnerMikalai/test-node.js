import Link from 'next/Link'
import styled from 'styled-components';

const linkStyle = {
  marginRight: 15
};

export default () => (
  <Header>
    <nav>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </nav>
  </Header>
);

const Header = styled.header`
  padding: 1rem 0;
`;
