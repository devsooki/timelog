import React, { useState } from 'react';
import styled from 'styled-components';

const TimeSettingModal = ({...props}) => {

  const { 
    onChangeTime,
    onChangeIsTimeSettingModal
  } = props

  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  const checkNumberValue = (value:string) => {
    return Number(value.replace(/[^0-9]/g, ''));
  }

  // TODO: 반복되는 함수 하나로 변경 할 것
  const onChangeHour = (value:string) => {
    const numberValue = checkNumberValue(value)

    if (numberValue > 23) {
      // 23시 넘어가면 무조건 0시로 변경
      setHour(0)
    } else {
      // ? 무조건 숫자만 입력받았는데 변경 할 수 없나?
      setHour(numberValue)
    }
  }
  const onChangeMinute = (value:string) => {
    const numberValue = checkNumberValue(value)

    if (numberValue > 59) {
      // 60 넘어가면 무조건 0분으로 변경
      setMinute(0)
    } else {
      setMinute(numberValue)
    }
  }
  const onChangeSecond = (value:string) => {
    const numberValue = checkNumberValue(value)

    if (numberValue > 59) {
      // 23시 넘어가면 무조건 0시로 변경
      setSecond(0)
    } else {
      setSecond(numberValue)
    }
  }

  const onClickConfirm = () => {
    const fommatTime = hour * 3600 + minute * 60 + second
    onChangeTime(fommatTime)
    onChangeIsTimeSettingModal(false)
  }

  const onClickCancel = () => {
    onChangeIsTimeSettingModal(false)
  }

  return (
    <Container>
      <h1>⏰ 오늘의 목표 시간을 설정해보세요 ⏰</h1>
      <Content>
        {/* TODO: select 박스로 바꿀지 고민... */}
        <input 
          value={hour}
          onChange={e => onChangeHour(e.target.value)}
        />&nbsp;&#58;&nbsp;
        <input 
          value={minute}
          onChange={e => onChangeMinute(e.target.value)}
        />&nbsp;&#58;&nbsp;
        <input 
          value={second}
          onChange={e => onChangeSecond(e.target.value)}
        />
      </Content>
      <ButtonContainer>
        <Button className='confirm' onClick={onClickConfirm}>확인</Button>
        <Button className='cancel' onClick={onClickCancel}>취소</Button>
      </ButtonContainer>
    </Container>
  )
}

export default TimeSettingModal

const Container = styled.div`
  position: fixed;
  top: 200px; left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  width: 300px;
  color: #666;
  background-color: rgba(255, 255, 255, 0.7);

  h1 {
    font-size: 15px;
  }
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  input {
    padding: 5px;
    width: 70px;
    text-align: center;
    border: none;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;

  &.confirm {
    color: #3232e6;
  }
  &.cancel {
    color: #ef3232;
  }
`