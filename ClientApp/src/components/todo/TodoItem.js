import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {

  return (
    <ListItem>
      <ListItemText primary={props.title} />
      <Checkbox onChange={props.onCheckItem} />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={props.onDeleteItem}>
        Delete
      </Button>
    </ListItem>
  );
};

export default TodoItem;