import React from 'react'
import { CustomDate, Menu, Timer, TodoList } from 'components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Content>
        <CustomDate />
        <Timer />
        <TodoList />
      </Content>
      <Menu />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  width: 430px;
`