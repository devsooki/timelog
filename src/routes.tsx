import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LogPage, TimerPage, TodoPage } from 'pages';
import { RootLayout } from 'layouts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<TimerPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="log" element={<LogPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes