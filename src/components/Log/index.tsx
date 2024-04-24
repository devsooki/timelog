import React, { useState } from 'react'
import styled from 'styled-components'
import { Calendar } from './@components'

const Log = () => {
  return (
    <>
      <Container>
        <Calendar/>
      </Container>
      {/* TODO: 저장된 데이터 있는 날, 하단에 로그 어떻게 표현할지 고민.. */}
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