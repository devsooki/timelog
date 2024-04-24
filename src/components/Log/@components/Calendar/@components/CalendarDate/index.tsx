import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { dateCellFormatted } from 'utils/date';

interface Props {
  cell: number,
  date: Date
}
interface TimeItem {
  id: string;
  acc: number;
}
const CalendarDate = ({ cell, date }: Props) => {
  const [isDate, setIsDate] = useState<number[]>([]);
  const [times, setTimes] = useState<TimeItem[]>([]);
  useEffect(() => {
    const localstorageData = localStorage.getItem('times');

    if (localstorageData !== null) {
      const parsedData = JSON.parse(localstorageData);
      setTimes(parsedData);
    }
  }, [])
  useEffect(() => {
    // 처음에 데이터 저장을 잘못해서 확인하는데 엄청 번거로운 일이..... 다음부턴 잘 챙기면서 할 것!
    times.map((t) => {
      if (dateCellFormatted(date, cell) === t.id) {
        setIsDate([...isDate, new Date(t.id).getDate()]);
      }
    })
  }, [times])
  

  if (cell === 0) {
    return <DateContainer className='empty'></DateContainer>
  }
  return (
    <>
      <DateContainer>
        <div>
          {cell}
        </div>
        {isDate.includes(cell) && '🔥'}
      </DateContainer>
    </>
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