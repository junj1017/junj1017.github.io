import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/hi.png'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 65vw;
height:55vh;
display: flex;
background: linear-gradient(
    to left,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to left,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-right: 2px solid ${props => props.theme.body};
    border-left: 2px solid ${props => props.theme.text};
    z-index:1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
left: 50%;
.pic{
    position: absolute;
    bottom: 0;
    right: 150%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding-left: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: ${props => `rgba(${props.theme.text},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>WELCOME!</h1>
                    <h3>I'M JUN </h3>
                    <h4>(pronounced like a month)</h4>
                    <h6> Just a small engineer in a big world trying to make big changes.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro