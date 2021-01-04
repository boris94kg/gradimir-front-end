import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    background: "#fff",
    boxShadow: "0px 2px 25px 6px #ABC2C8",
    borderRadius: "8px",
    margin: "50px auto",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "0 35px",
  },

  typography: {
    fontFamily: '"Helvetica"',
    fontWeight: 400,
    margin: "25px 0 20px 0",
  },
  inputStyle: {
    backgroundColor: "#F3FCFE",
    padding: "12px",
    boxShadow: "0px 2px 4px #ABC2C8",
    margin: "5px 0 5px 0",
    color: "#087495",
  },
  submitBtn: {
    display: "flex",
    alignSelf: "center",
    backgroundColor: "#00A4D7",
    width: "50%",
    margin: "30px 0 60px 0",
  },
  redirectBtn: {
    backgroundColor: "#00A4D7",
    width: "80%",
    margin: "10px 0 30px 0",
    padding: "10px",
  },
  logInLink: {
    display: "contents",
    textDecoration: "none",
  },
}));

const LogIn = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      component="div"
      className={classes.root}
      direction="column"
      justify="flex-start"
      alignItems="center"
      alignContent="center"
      xs={10}
    >
      <Typography className={classes.typography} variant="h3">
        Login
      </Typography>
      <form className={classes.form} noValidate>
        <Input
          className={classes.inputStyle}
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          required
        />
        <Input
          className={classes.inputStyle}
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          required
        />
        <Link to="/dobrodosli" className={classes.logInLink}>
          <Button
            type="Btn"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Log in
          </Button>
        </Link>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs>
            <Typography variant="p">Jos uvek nemas profil?</Typography>
          </Grid>
          <Button
            type="Btn"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.redirectBtn}
          >
            Kreiraj profil radnika
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default LogIn;
