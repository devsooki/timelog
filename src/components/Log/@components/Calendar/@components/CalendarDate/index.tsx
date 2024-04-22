import React from 'react'
import styled from 'styled-components'

interface Props {
  cell: number,
  date: Date
}
const CalendarDate = ({ cell, date }: Props) => {
  if (cell === 0) {
    return <DateContainer className='empty'></DateContainer>
  }
  return (
    <DateContainer
        //onClick={onClickCalendarDate}
      >
        <div
          // className={isCurrentMonth && cell === todayDate && 'today'}
        >
          {cell}
        </div>
      </DateContainer>
  )
}

export default CalendarDate

const DateContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column;
  height: 100%;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
  &.empty {
    background-color: #f2f2f2;
  }
`