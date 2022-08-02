import Link from 'next/link';
import styled from 'styled-components';

const NavBarUl = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
`
const NavBarLi = styled.li`
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
float: left;
`

function MainNavBar() {
    return (
            <NavBarUl>
                <NavBarLi><Link href= "/">Home</Link></NavBarLi>
            </NavBarUl>
    )
}

export default MainNavBar;
