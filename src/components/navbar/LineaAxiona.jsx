import React from "react";
import styled from "styled-components";
import { Container, Box } from "@mui/material";
import { BsFillTelephoneFill } from "react-icons/bs";

const Wrapper = styled.div`
  background: #e0edf5;
  height: 50px;
  display: flex;
  align-items: center;
`;
const TxtLineaAxiona = styled.span`
  font-size: 16px;
  font-family: "IBM Plex Sans";
  font-weight: bold;
`;

const ContainerIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BtnPruebas = styled.a`
    display: block;
    background:#1C3245 ;
    color: #fff;
    font-family: 'IBM Plex Sans';
    font-weight: bold;
    border-radius: 35px;
    padding: 2px 16px;
    text-decoration: none;

        @media (min-width: 900px) {
            display: none;
        }
`

const LineaAxiona = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ContainerIconText>
          <BsFillTelephoneFill color="#EAAC34" size={19} />
          <TxtLineaAxiona>
            
            <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
              Línea Axiona®
            </Box>{" "}
            +52 55 19 69 4584
          </TxtLineaAxiona>
        </ContainerIconText>
        <BtnPruebas>Pruebas</BtnPruebas>
        </Box> 
      </Container>
    </Wrapper>
  );
};

export default LineaAxiona;
