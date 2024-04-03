import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TimeSettingModal from './TimeSettingModal';

const Timer = () => {
  // TODO: 초기 기본 설정 타이머 값 3분, 이후 시간 설정 기능 만든 후 변경 예정
  const [time, setTime] = useState<number>(0)
  const [remainingTime, setRemainingTime] = useState<number>(time);
  const [timerOn, setTimerOn] = useState<boolean>(false)

  const [isTimeSettingModal, setIsTimeSettingModal] = useState<boolean>(true);

  useEffect(() => {
    if (time === 0) {
    setIsTimeSettingModal(true)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerOn && time > 0) {
        setTime(prev => prev - 1);
      } else if (time < 0) {
        // TODO: 10초 미만으로 남을 경우 강조 색상으로 변경
        clearInterval(timer)
      } else if (time === 0) {
        setTime(time)
        setTimerOn(false)
      }
    }, 1000);

    return () => clearInterval(timer)
  }, [time, timerOn])

  const onChangeTimerOn = () => {
    setTimerOn(!timerOn)
  }

  const onChangeIsTimeSettingModal = () => {
    setIsTimeSettingModal(!isTimeSettingModal)
  }

  // TODO: hour도 만들지, 그냥 minute로 갈지 고민, 사용하는 곳 많으면 함수화 팔요
  const minute = String(Math.floor(time / 60)).padStart(2, '0');
  const second = String(Math.floor(time % 60)).padStart(2, '0');

  // TODO: 설정 안하고 끈 경우, 재 설정 할 수 있는 버튼 필요
  return (
    <Container>
      {isTimeSettingModal && 
        <TimeSettingModal 
          setTime={setTime} 
          onChangeIsTimeSettingModal={onChangeIsTimeSettingModal}
        />
      }
      <Content>
        <span>타이머</span>
        <b>{minute} : {second}</b>
      </Content>

      <TimerButton onClick={onChangeTimerOn}>
        <div className={timerOn ? 'on' : 'off'}/>
      </TimerButton>
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
const TimerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ff4040;
  background-color: #fff;

  .on {
    width: 15px;
    height: 15px;
    background-color: #ff4040;
  }
  .off {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #ff4040;  
  }

`