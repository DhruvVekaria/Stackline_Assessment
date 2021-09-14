import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core";
import logo from './stackline_logo.svg';

const useStyle = makeStyles(() =>({
    header: {
        backgroundColor: "#052849",
      }
}));

const Header = props => {
  const size = {
    height: 70,
    width: 150
}
const {header} = useStyle();
return (
    <div>
      <AppBar position="static" className = {header}>
        <Toolbar>
            <img style = {size} src={logo} alt="Logo" />
        </Toolbar>
      </AppBar>
    </div>
);
};

export default Header;