import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
height:5rem;
background: #cf0c3a;
padding:0.5rem;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
color: #fff;
`;


const Footer = () => {
    return (
        <FooterStyle>
            &copy; No Copyright. Developed in leisure time.
            TODO:Add social network : Github, hackerrank and leetcode.
        </FooterStyle>
    );
};

export default Footer;