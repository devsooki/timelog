import React from 'react'
import styled from 'styled-components'

interface Props {
  cell: number,
  date: Date
}
const CalendarDate = ({ cell, date }: Props) => {
  console.log(cell)
  if (cell === 0) {
    return <div className='empty'></div>
  }
  return (
    <div className='dd'
        //onClick={onClickCalendarDate}
      >
        <div
          // className={isCurrentMonth && cell === todayDate && 'today'}
        >
          {cell}
        </div>
      </div>
  )
}

export default CalendarDate
