import React from 'react';
import styled from 'styled-components';
// import  Logo from '../assets/images/cat_logo.png';
import { getImageByUrl } from '../../utils/utils';
const HeaderStyle = styled.header`
 height: 3rem;
 background: #cf0c3a;
padding:0.5rem;
box-sizing:border-box;
display:flex;
 box-shadow:0 7px 10px rgba(145,150,163,.5);
 align-items:center;
`;
const Header = () => {
    return (
        <HeaderStyle>
            <img src={getImageByUrl('/images/logo.svg')} height='35px' alt='logo'/>
        </HeaderStyle>
    );
};

export default Header;