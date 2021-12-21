import React from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./memories.png";
import Post from "./components/Posts/Post/Post";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import Posts from "./components/Posts/Posts";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Posts
        </Typography>
        <img
          src={memories}
          alt="memories"
          height="60"
          width="60"
          className={classes.image}
        />
      </AppBar>

      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
