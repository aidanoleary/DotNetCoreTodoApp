import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import ProfilePage from './components/profile/ProfilePage';
import TodoList from './components/todo/TodoList';
import SignIn from './components/auth/SignIn';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={TodoList} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/todo-list' component={TodoList} />
      </Layout>
    );
  }
}
