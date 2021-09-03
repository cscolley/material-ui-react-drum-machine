import React from "react";
import MyAppBar from "./components/MyAppBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Typography from '@material-ui/core/Typography';

const drumObjects = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const useStyles = makeStyles((theme) => ({
  main: {
    width: "auto",
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    paddingLeft: 0,
    "@media (max-width: 600px)": {
      marginTop: theme.spacing(11),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(4),
    },
  },
  button: {
    width: "100%",
    height: theme.spacing(10),
  },
  controlPanel: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  slider: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  display: {
    backgroundColor: "#d5d9e3",
    height: theme.spacing(6),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

const App = () => {
  const { main, button, controlPanel, slider, display } = useStyles();

  const [powerOn, setPowerOn] = React.useState(true);
  const [volume, setVolume] = React.useState(30);

  const handleSwitchChange = (event) => {
    setPowerOn(event.target.checked);
  };

  const handleVolumeChange = (event, newVolume) => {
    setVolume(newVolume);
  };

  return (
    <div>
      <CssBaseline />
      <MyAppBar />
      <Container maxWidth="sm">
        <Paper elevation={3} className={main}>
          <Grid container spacing={4} justifyContent="center">
            <Grid
              container
              item
              xs={12}
              sm={6}
              spacing={2}
              justifyContent="center"
            >
              {drumObjects.map((drumObj) => (
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={button}
                  >
                    {drumObj.keyTrigger}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              spacing={2}
              align="center"
              justifyContent="center"
              className={controlPanel}
            >
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={powerOn}
                      onChange={handleSwitchChange}
                      name="power"
                      color="secondary"
                    />
                  }
                  label="Power"
                />
              </Grid>
              <Grid item xs={12}>
                <Paper className={display} elevation={1}>
                  <Typography variant="h6">
                    Let's Play!
                  </Typography>
                </Paper>
              </Grid>
              <Grid container item xs={12} className={slider}>
                <Grid item>
                  <VolumeDown />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-labelledby="continuous-slider"
                  />
                </Grid>
                <Grid item>
                  <VolumeUp />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
