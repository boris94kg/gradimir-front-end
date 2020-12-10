import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

const FooterHolder = styled.div`
  position: relative;
  width: 100%;
  margin-top: auto;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  background-color: #ffffff;
  /* bottom: 0px; */
  width: 100%;
  border-top: 1px solid black;
  height: 59px;
`;

const Fotoer = () => {
  return (
    <FooterHolder>
      <Footer>
        <Box component="h3">Baner</Box>
      </Footer>
    </FooterHolder>
  );
};

export default Fotoer;
