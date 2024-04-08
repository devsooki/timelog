import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TimeSettingModal from './TimeSettingModal';

const Timer = () => {
  // TODO: 시간 사용하는 곳 많아지면 상태관리 필요
  const [time, setTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [accumulateTime, setAccumulateTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const [isTimeSettingModal, setIsTimeSettingModal] = useState<boolean>(true);

  useEffect(() => {
    if (time === 0) {
    setIsTimeSettingModal(true)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerOn && remainingTime > 0) {
        setRemainingTime(prev => prev - 1);
        setAccumulateTime(prev => prev + 1);
      } else if (remainingTime < 0) {
        // TODO: 10초 미만으로 남을 경우 강조 색상으로 변경
        clearInterval(timer);
        clearInterval(remainingTime);
      } else if (remainingTime === 0) {
        setTime(0)
        setTimerOn(false);
      }
    }, 1000);

    return () => clearInterval(timer)
  }, [remainingTime, timerOn])

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

  console.log(time, remainingTime)

  return (
    <BgContainer 
      time={time} 
      remainingTime={remainingTime}
    >
      <Container>
        {isTimeSettingModal && 
          <TimeSettingModal 
            setTime={setTime}
            setRemainingTime={setRemainingTime}
            onChangeIsTimeSettingModal={onChangeIsTimeSettingModal}
          />
        }
        <Content>
          <span>누적시간</span>
          <b>{fomattedTime(accumulateTime)}</b>
        </Content>
        <Content>
          <span>타이머</span>
          <b>{fomattedTime(remainingTime)}</b>
        </Content>

        <TimerButton onClick={onChangeTimerOn}>
          <div className={timerOn ? 'on' : 'off'}/>
        </TimerButton>
      </Container>
    </BgContainer>
  )
}

export default Timer

const BgContainer = styled.div<{ time: number, remainingTime: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 100%;
  height: 400px;
  border-radius: 50%;
  background: ${props => props.time === 0 ? '#c5d2e2' : `conic-gradient(#6798c2 ${((props.time - props.remainingTime) / props.time) * 100}%, #c5d2e2 0%)`};
  //background: conic-gradient(#6798c2 ${(props) => ((props.time - props.remainingTime) / props.time) * 100}%, #c5d2e2 0%);
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 50%;
  background-color: #bbe5f6;
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