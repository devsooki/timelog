import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoItem {
  name: string;
  done: boolean;
}
interface TodolistItem {
  name: string;
  done: boolean;
}

const TodoList = () => {
  const [todo, setTodo] = useState<TodoItem | null>();
  const [todos, setTodos] = useState<[TodolistItem] | null>();

  const onChangeTodo = (value:string) => {
    setTodo({name: value, done: false})
  }

  const onClickAddButton = () => {
    //localStorage.setItem("todos", todo);
    setTodo(null);
  }

  return (
    <Container>
      <ListContainer>
        <ListContent>
          <label htmlFor="todo-list">
            <input type="checkbox" name="todo-list" id="todo-list" />
          </label>
          <span>아래내용 기재시 여기에 입력</span>
        </ListContent>
      </ListContainer>
      <AddContainer>
        <input 
          type="text" 
          value={todo ? todo.name : ''}
          onChange={e => onChangeTodo(e.target.value)}
        />
        <button onClick={onClickAddButton}>추가</button>
      </AddContainer>
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`
const ListContainer = styled.ul`
  flex: 1;
`
const ListContent = styled.li`
  display: flex;
  gap: 10px;

  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");

    &:checked {
      background-color: #6798c2;
    }
  }
  span {
    color: #838383;
    font-size: 18px;
    //text-decoration: line-through;
  }
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    flex: 1;
    padding: 5px;
    font-size: 15px;
    border: 0;
  }
  button {
    padding: 5px;
    font-size: 15px;
  }
`