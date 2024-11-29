import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  img {
    width: 50px;
  }

`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`;
