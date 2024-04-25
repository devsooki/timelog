import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TimeSettingModal } from './@components';
import { dateFormatted } from 'utils/date';

// TODO: time id, Date로 할지, formatted한 스트링으로 할지 고민...
interface TimeItem {
  id: string;
  acc: number;
}
const formattedToday = dateFormatted(new Date());

const Timer = () => {
  // TODO: 시간 사용하는 곳 많아지면 상태관리 필요

  // 설정시간
  const [time, setTime] = useState<number>(0);
  // 설정시간 -> 타이머 on -> 잔여시간
  const [remainingTime, setRemainingTime] = useState<number>(0);
  // 누적시간
  const [accumulateTime, setAccumulateTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const [isTimeSettingModal, setIsTimeSettingModal] = useState<boolean>(true);

  // localStorage에 저장할 누적시간 배열
  const [times, setTimes] = useState<TimeItem[]>([]);

  useEffect(() => {
    if (time === 0) {
      setIsTimeSettingModal(true)
    }

    const localstorageData = localStorage.getItem('times');

    if (localstorageData !== null) {
      const parsedData = JSON.parse(localstorageData);
      parsedData.map((data: TimeItem) => {
        if (data.id === formattedToday) {
          setAccumulateTime(data.acc)
        } else {
          setAccumulateTime(0)
        }
      })
      setTimes(parsedData);
    }
  }, [])

  // times state가 변경될때마다 localstorage에 저장
  useEffect(() => {
    //  새로고침 될 경우 빈 배열 되는거 방지
    if (times.length === 0) return;

    localStorage.setItem("times", JSON.stringify(times));
  }, [times])

  useEffect(() => {
    if (!timerOn && accumulateTime !== 0) {
      const newTime: TimeItem = {
        id: formattedToday,
        acc: accumulateTime
      };
      let copyTimes = [...times];

      if (copyTimes.length === 0) {
        // times가 빈 배열일때 새로운 데이터 저장
        setTimes([newTime])
      } else {
        let findIndex = copyTimes.findIndex(time => time.id === formattedToday);
        
        if (findIndex !== -1) {
          copyTimes[findIndex].acc = accumulateTime;
          setTimes(copyTimes);
        } else {
          setTimes([...copyTimes, newTime]);
        }
      }

    }
  }, [timerOn])

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

  const onChangeTime = (fommatTime: number) => {
    setTime(fommatTime);
    setRemainingTime(fommatTime);
  }

  return (
    <BgContainer 
    $time={time} 
    $remainingtime={remainingTime}
    >
      <Container>
        {isTimeSettingModal && 
          <TimeSettingModal
            onChangeTime={onChangeTime}
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

const BgContainer = styled.div<{ $time: number, $remainingtime: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${props => props.$time === 0 ? '#c5d2e2' : `conic-gradient(#6798c2 ${((props.$time - props.$remainingtime) / props.$time) * 100}%, #c5d2e2 0%)`};
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
  gap: 5px;

  b {
    font-size: 30px;
    letter-spacing: -1px;
  }
`
const TimerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #ff4040;
  background-color: #fff;

  .on {
    width: 13px;
    height: 13px;
    background-color: #ff4040;
  }
  .off {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-left: 12px solid #ff4040;  
  }

`