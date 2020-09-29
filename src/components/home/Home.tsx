import React from 'react';
import styled from 'styled-components';
import { DASHBOARD_OPTIONS } from '../../contants/constants'

interface Props {
    img: string;
}

const HomeStyle = styled.div`
h4{
    text-align: center;
}
display:flex;
flex-flow:column;   
`;
const OptionsContainerStyle = styled.div`
display:flex;
`;


const OptionsStyle = styled.div<Props>`
background-image: ${props => `url(${props.img})`};
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width:10rem;
height:10rem;
cursor:pointer;
border-radius:50%;
margin-right:1rem;
`;


const Home = () => {
    return (
        <HomeStyle>
            <h2>Welcome to Rick & Morty Dashboard</h2>
            <h4>Select which item want you review</h4>
            <OptionsContainerStyle>

                {DASHBOARD_OPTIONS.map((d) =>
                    <OptionsStyle key={d.option} img={d.img} >

                    </OptionsStyle>
                )}
            </OptionsContainerStyle>
        </HomeStyle>
    );
};

export default Home;