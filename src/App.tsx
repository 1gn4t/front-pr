import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { AboutAsync } from './pages/About.async';
import { MainAsync } from './pages/MainAsync';

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense>
        <Routes>
          <Route path='/about' element={<AboutAsync />} />
          <Route path='/' element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
