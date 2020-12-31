import React from "react";
import styled from "styled-components";
import plumber from "../../assets/plumber.jpg";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Container = styled.div`
  display: block;
  // min-height: 500px;
  // height: 100vh;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 30px;
  }
`;

const BackgroundImage = () => {
  return (
    <Container>
      <img src={plumber} alt="plumber-img" />
      <Grid
        container
        alignContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={1} sm={1} />
        <Grid item xs={10}>
          <Typography align="center" variant="h3">
            Gradimir je...
          </Typography>
          <Box component="p" my="30px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            tenetur! Eum expedita error deleniti tenetur cum perspiciatis
            placeat impedit a quis magni, nisi officiis. Excepturi asperiores
            quasi minima ullam eaque dolorem velit saepe nesciunt veritatis
            harum molestiae quas aspernatur, architecto nihil sed minus officiis
            laborum, placeat optio? Laudantium cum natus nam inventore molestiae
            dolore, amet dignissimos veniam quisquam. Eveniet beatae tempore
            accusamus ratione explicabo repellendus veritatis, pariatur ab non
            Lorem ipsum dolor sit amet consect tenetur!
          </Box>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Container>
  );
};

export default BackgroundImage;
