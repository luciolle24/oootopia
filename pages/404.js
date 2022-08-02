import styled from 'styled-components';

const CenteredP = styled.p`
  float: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 38px;
  letter-spacing: 1.6px;
  word-spacing: 1.6px;
  color: #000000;
  font-variant: small-caps;
  text-transform: uppercase;
`;

function PageNotFound() {
  return <CenteredP>This is not the page you're looking for...</CenteredP>;
}

export default PageNotFound;
