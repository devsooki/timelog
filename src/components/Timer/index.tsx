import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TimeSettingModal from './TimeSettingModal';

const Timer = () => {
  // TODO: 시간 사용하는 곳 많아지면 상태관리 필요
  const [time, setTime] = useState<number>(0)
  const [accumulateTime, setAccumulateTime] = useState<number>(0);
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
        setAccumulateTime(prev => prev + 1);
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
    if (time === 0) {
      setIsTimeSettingModal(!isTimeSettingModal);
      return
    }
    setTimerOn(!timerOn)
  }

  const onChangeIsTimeSettingModal = () => {
    setIsTimeSettingModal(!isTimeSettingModal)
  }

  const fomattedTime = (time:number) => {
    // TODO: hour도 만들지, 그냥 minute로 갈지 고민, 사용하는 곳 많으면 함수화 팔요
    const minute = String(Math.floor(time / 60)).padStart(2, '0');
    const second = String(Math.floor(time % 60)).padStart(2, '0');

    const fomatted = `${minute} : ${second}`

    return fomatted
  }

  // TODO: 시간 재 설정 버튼 필요
  return (
    <Container>
      {isTimeSettingModal && 
        <TimeSettingModal 
          setTime={setTime} 
          onChangeIsTimeSettingModal={onChangeIsTimeSettingModal}
        />
      }
      <Content>
        <span>누적시간</span>
        <b>{fomattedTime(accumulateTime)}</b>
      </Content>
      <Content>
        <span>타이머</span>
        <b>{fomattedTime(time)}</b>
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
  width: 100%;
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