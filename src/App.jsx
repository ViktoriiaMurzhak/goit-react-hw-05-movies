import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { useState } from 'react';

export const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};
