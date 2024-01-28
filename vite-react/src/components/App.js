import React, { Component } from "react";
import styled from "styled-components";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import ItemList from "./ItemList";
import Book from "./BookPage";
import Filter from "./Filter";
import Posts from "./Posts";
import Picker from "./Picker";
import Todo from "./Todo";

const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 480px !important;
  background-color: white;
`;

// Main app structure
class App extends Component {
  render() {
    return (
      <Container className="row flex-center flex-middle">
        <Paper className="border border-primary padding-large margin-large no-responsive">
          <h3 className="margin-small">PaperTodo</h3>
          <AddTodo />
          <TodoList />
          <ItemList />
          <Book />
          <Filter />
          <Posts />
          <Picker />
          <Todo />
        </Paper>
      </Container>
    );
  }
}

export default App;
