import React from 'react';
import CalendarDate from '../CalendarDate';
import styled from 'styled-components';

interface Props {
  calendarMatrix: number[][],
  date: Date,
  setTimelog: (time: number) => void;
}
const CalendarDay = ({ calendarMatrix, date, setTimelog }:Props) => {

  const createCell = (cell: number, idx: number) => {
    return (
      <CalendarDate
        key={idx}
        cell={cell}
        date={date}
        setTimelog={setTimelog}
      />
    )
  };

  const creatRow = (row: number[], idx: number) => {
    const tds = row.map(createCell);
    return <DayContainer key={idx}>{tds}</DayContainer>;
  };

  return (
    <div>
      {calendarMatrix.map(creatRow)}
    </div>
  )
}

export default CalendarDay

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 13px;
  border-bottom: 1px solid #ddd;
`