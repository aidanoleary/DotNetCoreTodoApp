import React, { Component } from 'react';
import './NavMenu.css';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function NavMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Todo Application
            </Typography>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/profile">
              Profile
            </Button>
            <Button color="inherit" href="/todo-list">
              Todo List
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
