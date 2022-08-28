import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { Design, Develope} from './Svgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlete';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const SkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />
<Main>
<Title>
    <Develope width={40} height={40} /> Software Engineer
</Title>
<Description>
I love solving challenging real-world problems and have passion towards building groundbreaking, innovative products. 
</Description>
<Description>
<strong>Skills</strong>
<p>
Python, Java, Javascript, React, Angular, Go, C, Flask
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
AWS, Github, Git, VScode
</p>
</Description>

            </Main>
            <Main>
<Title>
    Resume available upon request. Email me at junj1017@berkeley.edu
</Title>


            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default SkillsPage