import React, { useState } from 'react'
import styled from 'styled-components'
import { Calendar } from './@components'
import { fomattedTime } from 'utils/time';

const Log = () => {
  const [timelog, setTimelog] = useState<number>(0);
  const logMessage = (timelog: number) => {
    if (timelog === 0) {
      return '공부 안하시나요? 🤬'
    } else if (timelog < 3600) {
      return '🔥 조금 더 분발하세요 🔥'
    } else if (timelog > 3600) {
      return '잘하고 있어요! 조금 더 힘냅시다! 🦾'
    }
  }
  
  return (
    <>
      <Container>
        <Calendar setTimelog={setTimelog} />
        <LogContainer>
          <span>{logMessage(timelog)}</span>
          <b>{timelog !== 0 && fomattedTime(timelog)}</b>
        </LogContainer>
      </Container>
      {/* TODO: 저장된 데이터 있는 날, 하단에 로그 어떻게 표현할지 고민.. */}
    </>
  )
}

export default Log

const Container = styled.div`
  width: 100%;
`
const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 0 0;
  
  b {
    font-size: 30px;
  }
  span {
    font-size: 15px;
  }
`