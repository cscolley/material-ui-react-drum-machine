import React from "react";
import Grid from '@material-ui/core/Grid';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  slider: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  displayPanel: {
    backgroundColor: "#d5d9e3",
    height: theme.spacing(6),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

const ControlPanel = ({
  powerOn,
  handleSwitchChange,
  display,
  volume,
  handleVolumeChange,
}) => {
  const { slider, displayPanel } = useStyles();

  return (
    <>
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
        <Paper className={displayPanel} elevation={1}>
          <Typography variant="h6">{display}</Typography>
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
    </>
  );
};

export default ControlPanel;
