import React from 'react';
import styled from 'styled-components';

// TODO: Route 설정 완료하면 Todo, 메뉴내로 이동
const Menu = () => {
  return (
    
    <Container>
      <Content></Content>
      <Content></Content>
      <Content></Content>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  position: fixed;
  left: 0; right: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  color: #666;
  font-size: 18px;
`