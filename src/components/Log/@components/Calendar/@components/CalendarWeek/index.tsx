import React from 'react';
import styled from 'styled-components';

const DAY = ["일", "월", "화", "수", "목", "금", "토"];

const Week = () => {
  return (
    <Container>
      {DAY.map(day => (
        <WeekContent key={day}>
          {day}
        </WeekContent>
      ))}
    </Container>
  )
}

export default Week

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 13px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`
const WeekContent = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
  line-height: 40px;
  border-right: 1px solid #ddd;

  &:nth-child(1) {
    color: #cc0000;
  }
  &:nth-child(7) {
    color: #1070ba;
  }
  &:last-child {
    border-right: none;
  }
`