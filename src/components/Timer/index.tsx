import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Timer = () => {
  // TODO: 초기 기본 설정 타이머 값 3분, 이후 시간 설정 기능 만든 후 변경 예정
  const initialTime = 180;
  const [remainingTime, setRemainingTime] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prev => prev - 1);
      } else {
        // TODO: 10초 미만으로 남을 경우 강조 색상으로 변경
        clearInterval(timer)
      }
    }, 1000);

    return () => clearInterval(timer)
  }, [remainingTime])

  // TODO: 초기 값 변경되서 h도 생기면 포맷 변경 필요
  const minute = String(Math.floor(remainingTime / 60)).padStart(2, '0');
  const second = String(Math.floor(remainingTime % 60)).padStart(2, '0');

  return (
    <Container>
      <Content>
        <span>타이머</span>
        <b>{minute} : {second}</b>
      </Content>
    </Container>
  )
}

export default Timer

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  height: 400px;
  color: #fff;
  border-radius: 50%;
  border: 5px solid #fff;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  b {
    font-size: 50px;
    letter-spacing: -1px;
  }
`