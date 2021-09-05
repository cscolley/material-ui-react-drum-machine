import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    height: theme.spacing(10),
  },
}));

const DrumPad = ({
  padId,
  keyCode,
  keyTrigger,
  audioSrc,
  updateDisplay,
  powerOn,
  volume,
  disabled
}) => {
  const { button } = useStyles();

  const playAudio = () => {
    if (powerOn) {
      const audio = document.getElementById(keyTrigger);
      audio.currentTime = 0;
      audio.volume = volume / 100;
      audio.play();
      updateDisplay(padId);
    }
  };

  const keyHandler = (e) => {
    if (e.keyCode === keyCode) playAudio();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  return (
    <Grid item xs={4}>
      <Button
        variant="contained"
        color="primary"
        elevation={10}
        className={button}
        id={padId}
        onClick={playAudio}
        disabled={disabled}
      >
        <audio id={keyTrigger} src={audioSrc} />
        {keyTrigger}
      </Button>
    </Grid>
  );
};

export default DrumPad;
