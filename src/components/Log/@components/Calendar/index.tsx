import React, { useState } from 'react';
import styled from 'styled-components';
import { MonthSelector, CalendarWeek, CalendarDay } from './@components';
import { getFirstDate, getLastDate } from 'utils/date';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const firstDay = getFirstDate(date).getDay();
  const lastDate = getLastDate(date).getDate();


  // 해당 달이 총 몇주까지 있는지 -> 배열 갯수 이 숫자로 만들기
  const lastWeekNo = Math.ceil((firstDay + lastDate) / 7);
  const calendarMatrix = Array.from(Array(lastWeekNo), () => new Array(7).fill(0));

  let colIdx = firstDay;
  let rowIdx = 0;

  for (let i = 1; i <= lastDate; i++) {
    calendarMatrix[rowIdx][colIdx] = i;

    colIdx++;

    if (colIdx > 6) {
      colIdx = 0;
      rowIdx++ 
    }
  }

  return (
    <Container>
      <MonthSelector 
        date={date}
        setDate={setDate}
      />
      <CalendarWeek />
      <CalendarDay 
        calendarMatrix={calendarMatrix}
        date={date}
      />
    </Container>
  )
}

export default Calendar

const Container = styled.div`
  //width: 100%;
  background-color: #fff;
`