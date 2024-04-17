import React, { useState } from 'react';
import styled from 'styled-components';
import { MonthSelector, Week } from './@components';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <MonthSelector 
        date={date}
        setDate={setDate}
      />
      <Week />
    </Container>
  )
}

export default Calendar

const Container = styled.div`
  //width: 100%;
  background-color: #fff;
`