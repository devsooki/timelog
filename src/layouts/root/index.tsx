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
  gap: 30px;
  padding: 30px 20px 100px;
  margin: 0 auto;
  max-width: 500px;
`