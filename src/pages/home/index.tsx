import React from 'react'
import { CustomDate, Timer } from 'components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <CustomDate />
      <Timer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0;
`