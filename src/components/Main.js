import React from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import { NavLink } from 'react-router-dom';
import { YinYang } from './Svgs';
import { useState } from 'react';
import Intro from './Intro';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const CONTACT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
float: right;
top: 2rem;
right: 2rem;
text-decoration: none;
z-index:1;

`

const BLOG = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 2rem;
right: 11rem;
text-decoration: none;
z-index:1;

`

const PROJECT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 2rem;
right: 18rem;
text-decoration: none;
z-index:1;
`

const ABOUT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width:100%;
display: flex;
justify-content: space-evenly;
`
const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`
const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%' };
left: ${props => props.click ? '8%' : '50%' };
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}


`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
left: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`
const Main = () => {

    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    return (
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>
                <PowerButton/>
                <LogoComponent move={click ? 'move' : 'stay'}/>
                <SocialIcons/>
                <Center click={click}>
                    <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span> click here </span>
                </Center>
                <CONTACT target="_blank" click = {click} to={{pathname:"mailto:junj1017@berkeley.edu"}}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    
                    >
                        CONTACT
                    </motion.h2>
                </CONTACT>

                <BLOG to="/blog" click = {click}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    
                    >
                        BLOG
                    </motion.h2>
                </BLOG>
                
                <PROJECT to="/project" click = {click}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        PROJECT
                    </motion.h2>
                </PROJECT>
                <BottomBar>
                    <ABOUT to="/about">
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                         whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            ABOUT
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills" click={click}>
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            SKILLS
                        </motion.h2>
                    </SKILLS>

                </BottomBar>

            </Container>
            {click ? <Intro click={click}/> : null}
        </MainContainer>
    )
}

export default Main