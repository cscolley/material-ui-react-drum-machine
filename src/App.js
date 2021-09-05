import React from "react";
import MyAppBar from "./components/MyAppBar";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DrumPad from "./components/DrumPad";
import ControlPanel from "./components/ControlPanel";

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

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    paddingLeft: 0,
    "@media (max-width: 600px)": {
      marginTop: theme.spacing(9),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(4),
    },
  },
  controlPanel: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const App = () => {
  const { paper, controlPanel } = useStyles();

  const defaultDisplay = "Let's Play!";

  const [powerOn, setPowerOn] = React.useState(true);
  const [display, setDisplay] = React.useState(defaultDisplay);
  const [volume, setVolume] = React.useState(30);
  const [disabled, setDisabled] = React.useState(false);

  const handleSwitchChange = (event) => {
    setPowerOn(event.target.checked);
    if (event.target.checked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleDisplayChange = (value) => {
    setDisplay(value);
    setTimeout(() => setDisplay(defaultDisplay), 2000);
  };

  const handleVolumeChange = (event, newVolume) => {
    setVolume(newVolume);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyAppBar />
      <Container maxWidth="sm">
        <Paper elevation={3} className={paper}>
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
                <DrumPad
                  key={drumObj.id}
                  padId={drumObj.id}
                  keyCode={drumObj.keyCode}
                  keyTrigger={drumObj.keyTrigger}
                  audioSrc={drumObj.url}
                  updateDisplay={handleDisplayChange}
                  powerOn={powerOn}
                  volume={volume}
                  disabled={disabled}
                />
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
              <ControlPanel
                powerOn={powerOn}
                handleSwitchChange={handleSwitchChange}
                display={display}
                volume={volume}
                handleVolumeChange={handleVolumeChange}
                disabled={disabled}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
