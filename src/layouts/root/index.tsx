import React from 'react'
import { CustomDate, Menu } from 'components'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <Container>
      <CustomDate />
      <Outlet />
      <Menu />
    </Container>
  )
}

export default Root

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 20px;
`