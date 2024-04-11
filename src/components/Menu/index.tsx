import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const menu = [
  {
    menu: 'Timer',
    href: '/'
  }, {
    menu: 'Todo',
    href: '/todo'
  }, {
    menu: 'Log',
    href: '/log'
  }
]
const Menu = () => {
  const navigate = useNavigate();

  const onClickMenu = (menu:string) => {
    navigate(menu)
  }

  return (
    <Container>
      {
        menu.map(m => {
          return (
            <Content onClick={() => onClickMenu(m.href)}>{m.menu}</Content>
          )
        })
      }
    </Container>
  )
}

export default Menu

const Container = styled.div`
  position: fixed;
  left: 0; right: 0;
  bottom: 0;

  display: flex;
  //flex: 1 1 0;
`
const Content = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px 0;
  color: #666;
  font-size: 18px;
  //background-color: transparent;
`