import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const FooterDiv = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;
const CategoryDiv = styled.div`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
  float: left;
`;
const NavBarLi = styled.li`
  display: block;
  color: white;
  text-align: justify;
  padding: 14px 16px;
  text-decoration: none;
  float: center;
`;
const LogoImage = styled.img`
  border-radius: 50%;
  width: ${({ width }) => width};
  height: 80px;
  float: center;
`;

function Footer() {
  return (
    <footer>
      <FooterDiv>
        <CategoryDiv>
          <ul>
            <NavBarLi>
              <Link href="/">
                <img
                  width="400px"
                  height="160px"
                  src="../Logos/Eukleia_White.png"
                ></img>
              </Link>
            </NavBarLi>
          </ul>
        </CategoryDiv>
        <CategoryDiv>
          <h2>Follow us</h2>

          <NavBarLi>
            <Link href="https://www.linkedin.com/company/eukleia/">
              <LogoImage width="80px" src="../Footer/linkedIn.jpg"></LogoImage>
            </Link>
          </NavBarLi>
        </CategoryDiv>
        <CategoryDiv>
          <h2>
            <Link href="/contact">CONTACT</Link>
          </h2>
          <Link href="https://discord.gg/35pepBFk82">Join our discord</Link>{' '}
          <br />
          <Link href="/">Policies</Link>
        </CategoryDiv>
      </FooterDiv>
    </footer>
  );
}

export default Footer;
