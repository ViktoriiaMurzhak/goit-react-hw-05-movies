import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
