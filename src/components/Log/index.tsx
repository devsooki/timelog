import React from 'react'
import styled from 'styled-components'
import { DailyLog, WeeklyLog } from './@components'

const Log = () => {
  return (
    <>
      <ButtonContainer>
        <button>Daily</button>
        <button>Weekly</button>
      </ButtonContainer>
      <Container>
        <DailyLog />
      </Container>
    </>
  )
}

export default Log

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  button {
    padding: 5px 10px;
    color: #666;
    font-size: 18px;
    background-color: #fff;
    border-radius: 8px;
  }
`
const Container = styled.div`
  width: 100%;
`