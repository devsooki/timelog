import React from 'react';
import CalendarDate from '../CalendarDate';
import styled from 'styled-components';

interface Props {
  calendarMatrix: number[][],
  date: Date,
}
const CalendarDay = ({ calendarMatrix, date }:Props) => {

  const createCell = (cell: number, idx: number) => {
    return (
      <CalendarDate
        key={idx}
        cell={cell}
        date={date}
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