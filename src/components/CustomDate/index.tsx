import React from 'react'
import styled from 'styled-components'

const CustomDate = () => {
  const today = new Date()
  const formatDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
  
  return (
    <Container>
      {formatDate}
    </Container>
  )
}

export default CustomDate

const Container = styled.div`
  padding-bottom: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`