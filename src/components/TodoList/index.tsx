import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TodoItem {
  name: string;
  completed: boolean;
}

// 기본 작업 마무리 후, 수정&삭제 기능 넣기
const TodoList = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const localstorageData = localStorage.getItem('todos');
    if (localstorageData !== null) {
      setTodos(JSON.parse(localstorageData))
    }
  }, [])

  useEffect(() => {
    // todos 새로고침 될 경우 빈 배열 되는거 방지
    if (todos.length === 0) return;

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  const onChangeTodo = (value:string) => {
    setTodo(value)
  }

  const onChangeCompleted = (idx:number) => {
    let copyTodos = [...todos];

    copyTodos[idx] = {...copyTodos[idx], completed: !todos[idx].completed};
    setTodos(copyTodos)
  }

  const onClickAddButton = () => {
    if (todo === '') return;

    const newTodo: TodoItem = {
      name: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  }

  return (
    <Container>
      <ListContainer>
          {todos && todos.map((todo, idx) => {
            return (
              <ListContent key={idx}>
                <label htmlFor="todo-list">
                  <input 
                    type="checkbox"
                    name="todo-list"
                    id="todo-list"
                    checked={todo.completed}
                    onChange={() => onChangeCompleted(idx)}
                  />
                </label>
                <span className={todo.completed ? 'completed-todo' : ''}>{todo.name}</span>
                <button>X</button>
              </ListContent>
            )
          })}
      </ListContainer>
      <AddContainer>
        <input 
          type="text" 
          value={todo}
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 150px;
  overflow-y: scroll;
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

    &.completed-todo {
      text-decoration: line-through;
    }
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