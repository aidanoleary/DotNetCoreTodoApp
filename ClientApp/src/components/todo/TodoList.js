import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import TodoService from '../../services/TodoService';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      todoItems: [],
      formTodoInfo: {
        title: "",
        description: ""
      }
    }
    this.todoService = new TodoService();
  }

  componentDidMount() {
    this._fetchTodoItems();
  }

  _fetchTodoItems = async () => {
    this.setState({
      loading: true,
      todoItems: []
    });

    const todos = await this.todoService.getAllTodos();
    this.setState({
      loading: false,
      todoItems: todos
    });

  }

  _renderLoadingSpinner = () => {
    return <CircularProgress size={75} />;
  }

  _renderTodoItems = () => {
    return this.state.todoItems.map((item, index) => (
      <TodoItem
        key={item.id}
        title={item.title}
        description={item.description}
        onDeleteItem={() => this._onDeleteItem(item.id)}
      />
    ))
  };

  _onEditTodo = (id, newTitle, newDescription) => {
    // Call the service to edit the todo item

    // Update the state
    let { todoItems } = this.state;
    let todoItem = this._getTodoItemById(id);

    todoItem.title = newTitle;
    todoItem.description = newDescription;

    this.setState({
      todoItems: this.state.todoItems
    });
  }

  _onDeleteItem = (id) => {
    // Call the service to delete a todo item
    this.todoService.deleteTodo(id);

    // Update the state
    let { todoItems } = this.state;
    let todoItem = this._getTodoItemById(id);
    let todoItemIndex = todoItems.indexOf(todoItem);

    this.state.todoItems.splice(todoItemIndex, 1);

    this.setState({
      todoItems: this.state.todoItems
    })
  };

  _onChangeTitle = (event) => {
    this.setState({
      formTodoInfo: {
        title: event.target.value,
        description: this.state.formTodoInfo.description
      }
    });
  };

  _onChangeDescription = (event) => {
    this.setState({
      formTodoInfo: {
        title: this.state.formTodoInfo.title,
        description: event.target.value
      }
    });
  };

  _onAddItem = () => {
    // Call the service to add the todo item and get the generated Id for it
    const { formTodoInfo } = this.state;
    const newTodoDo = {
      id: 0,
      title: formTodoInfo.title,
      description: formTodoInfo.description
    };

    this.todoService
      .addTodo(newTodoDo)
      .then(todo => {
        this.setState({
          todoItems: [...this.state.todoItems, todo]
        });
      })
  }

  _getTodoItemById = (id) => {
    let { todoItems } = this.state;

    const todoItem = todoItems.find((currentTodoItem) => currentTodoItem.id === id);
    return todoItem;
  }

  render() {
    const { loading } = this.state;
    return (
      <Container maxWidth="md">
        {loading ? this._renderLoadingSpinner() : this._renderTodoItems()}
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            id="todo-title-textfield"
            label="Title"
            onChange={this._onChangeTitle}
            value={this.state.formTodoInfo.title}
          />
          <TextField
            fullWidth
            margin="normal"
            id="todo-description-textfield"
            label="Description"
            multiline rows="4"
            onChange={this._onChangeDescription}
            value={this.state.formTodoInfo.description}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this._onAddItem}>
            Add Todo Item
          </Button>
        </form>
      </Container>
    );
  }
}