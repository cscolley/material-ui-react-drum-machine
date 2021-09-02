import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CustomisedMenu from "./CustomisedMenu";

function MyAppBar() {
  return (
    <AppBar>
      <Toolbar>
        <CustomisedMenu />
        <Typography variant="h5">Drum Machine</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
