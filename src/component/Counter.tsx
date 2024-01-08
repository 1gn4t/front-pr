import { useState } from 'react';
import css from './Counter.module.scss';

export const Counter = () => {
  const [cont, setCount] = useState(0);
  return (
    <div>
      Counter
      {cont}
      <button
        className={css.btn}
        onClick={() => {
          setCount(cont + 1);
        }}
      >
        increment
      </button>
      <button
        className={css.btn}
        onClick={() => {
          setCount(cont - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};
