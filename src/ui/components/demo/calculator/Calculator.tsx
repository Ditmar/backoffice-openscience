import React, { useState } from 'react';
import Display from './atoms/display';
import styles from './styles.module.scss';

interface Event {
  target: {
    textContent: string;
  };
}

function Calculator() {
  const [display, setDisplay] = useState('');
  const numbers = [
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '/', '='],
  ];
  const handlerEvent = (e: Event) => {
    const value = e.target.textContent;
    if (value.includes('=')) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, no-eval
        setDisplay(eval(display));
      } catch (error: unknown) {
        setDisplay(error as string);
      }
    } else {
      setDisplay(display + e.target.textContent);
    }
  };
  const role = 'row';
  return (
    <div className={styles.wrapper} data-testid="calculator-title">
      <h2>Calculator</h2>
      <Display display={display} variant="primary" />
      {numbers.map((rows) => {
        return (
          <div role={role} key={rows.join('')}>
            {rows.map((number) => {
              return (
                <button key={number} onClick={handlerEvent} className={styles.button}>
                  {number}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Calculator;
