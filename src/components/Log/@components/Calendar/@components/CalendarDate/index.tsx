import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { dateCellFormatted } from 'utils/date';

interface Props {
  cell: number,
  date: Date,
  setTimelog: (time: number) => void;
}
interface TimeItem {
  id: string;
  acc: number;
}
const CalendarDate = ({ cell, date, setTimelog }: Props) => {
  const [isTimelog, setIsTimelog] = useState<number[]>([]);
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
        setIsTimelog([new Date(t.id).getDate(), t.acc]);
      }
    })
  }, [times])

  const onClickIsDate = () => {
    // 이 방법뿐이 없나..?
    if (isTimelog[1]) {
      setTimelog(isTimelog[1])
    } else {
      setTimelog(0)
    }
    
  }
  

  if (cell === 0) {
    return <DateContainer className='empty'></DateContainer>
  }
  return (
    <>
      <DateContainer onClick={onClickIsDate}>
        <div>
          {cell}
        </div>
        {isTimelog.includes(cell) && <LogIcon />}
      </DateContainer>
    </>
  )
}

export default CalendarDate

const DateContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column;
  height: 100%;
  border-right: 1px solid #ddd;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }
  &.empty {
    cursor: initial;
    background-color: #f2f2f2;
  }
`
const LogIcon = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  opacity: 0.2;
`