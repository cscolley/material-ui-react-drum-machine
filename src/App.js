import React from "react";
import MyAppBar from "./components/MyAppBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    height: theme.spacing(48),
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    "@media (max-width: 600px)": {
      marginTop: theme.spacing(11),
    },
  },
}));

function App() {
  const { paper } = useStyles();

  return (
    <div>
      <CssBaseline />
      <MyAppBar />
      <Container maxWidth="sm">
        <Paper elevation={3} className={paper}></Paper>
      </Container>
    </div>
  );
}

export default App;
