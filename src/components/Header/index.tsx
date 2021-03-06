import React from "react"
import { Typography } from "@mui/material"
import {
  Header as HeaderStyled,
  Navigator,
  WaveSVG,
  NavbarContainer,
  LinkButton,
} from "@components/Header/header.style"
import {navigate} from "gatsby";


export default function Header({hero}: {hero: boolean}) {
  return (
    <HeaderStyled hero={hero}>
      <Navigator>
        <NavbarContainer>
          <Typography
            onClick={() => navigate('/')}
            sx={{ fontFamily: "'Gluten', cursive", fontSize: "30px", cursor: "pointer", fontWeight: 600 }}
            color={"#ffffff"}
            variant="h1"
          >
            Mühle Altrogge
          </Typography>
          <LinkButton to={"/quiz"}>Quiz</LinkButton>

        </NavbarContainer>
      </Navigator>
      {hero ? (
        <WaveSVG viewBox="0 0 2619 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L218.25 6.6875C436.5 13.125 873 26.875 1309.5 33.3125C1746 40 2182.5 40 2400.75 40H2619V80H2400.75C2182.5 80 1746 80 1309.5 80C873 80 436.5 80 218.25 80H0V0Z"
            fill="#BBDCD4"
          />
        </WaveSVG>
      ): null
      }

    </HeaderStyled>
  )

}

Header.defaultProps = {
  hero: true
}
