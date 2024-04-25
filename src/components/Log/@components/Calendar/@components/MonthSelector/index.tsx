import React from 'react';
import styled from 'styled-components';
import { getNextMonth, getPrevMonth } from 'utils/date';

interface Props {
  date: Date,
  setDate: (date:Date) => void;
}
const MonthSelector = ({ date, setDate }: Props) => {

  const onClickPrevMonth = () => {
    setDate(getPrevMonth(date));
  }
  const onClickNextMonth = () => {
    setDate(getNextMonth(date));
  }
  const dateFormat = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
  }

  return (
    <Container>
      <button onClick={onClickPrevMonth}>
        ◀
      </button>
      <b>{dateFormat()}</b>
      <button onClick={onClickNextMonth}>
        ▶
      </button>
    </Container>
  )
}

export default MonthSelector

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  color: #333;

  b {
    margin: 0 10px;
    width: 120px;
    font-size: 15px;
    text-align: center;
  }
  button {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
`