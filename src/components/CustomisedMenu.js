import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    marginRight: theme.spacing(4),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const ListItemLink = (props) => <ListItem component="a" {...props} />;

export default function CustomisedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { iconButton } = useStyles();

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        className={iconButton}
        aria-label="customized-menu"
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <WebIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemLink href='https://www.chriscolley.com.au' >
            <ListItemText primary="Portfolio" />
          </ListItemLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GitHubIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemLink href='https://github.com/cscolley/' >
            <ListItemText primary="GitHub" />
          </ListItemLink>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
