import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  border-top: 1px solid black;
  height: 59px;
`;

const Fotoer = () => {
  return (
    <Footer>
      <Box component="h3">Baner</Box>
    </Footer>
  );
};

export default Fotoer;
