import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const TodoItem = (props) => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <h1>{props.title}</h1>
      </Grid>
      <Grid item xs={4}>
        <p>{props.description}</p>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={props.onDeleteItem}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoItem;