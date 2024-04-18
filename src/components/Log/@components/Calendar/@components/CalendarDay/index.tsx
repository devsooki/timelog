import React from 'react';
import CalendarDate from '../CalendarDate';

interface Props {
  calendarMatrix: number[][],
  date: Date
}
const CalendarDay = ({ calendarMatrix, date }:Props) => {

  const createCell = (cell: number, idx: number) => {
    if (cell === 0) {
      return <div key={idx} className='empty'></div>
    }

    return (
      <CalendarDate
        key={idx}
        cell={cell}
        date={date}
        // todayDate={todayDate}
        // isCurrentMonth={isCurrentMonth}
      />
    )
  };

  const creatRow = (row: number[], idx: number) => {
    const tds = row.map(createCell);
    return <div key={idx}>{tds}</div>;
  };

  return (
    <div>
      {calendarMatrix.map(creatRow)}
    </div>
  )
}

export default CalendarDay