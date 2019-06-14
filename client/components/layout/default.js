import Header from '../Header';
import styled from 'styled-components';

const Layout = props => (
  <LayoutStyle>
    <Header />
    {props.children}
  </LayoutStyle>
);

const LayoutStyle = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

export default Layout;
