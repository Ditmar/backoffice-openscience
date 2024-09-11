import styles from './styles.module.scss'
import React, { useState } from 'react';
import Display from './display';
function Calculator() {
    const [display, setDisplay] = useState('');
    const numbers = [['7', '8', '9', '*'],['4', '5', '6', '-'],['1', '2', '3', '+'], ['0', '/', '=']];
    const handlerEvent = (e: any) => {
        const value = e.target.textContent;
        if (value.includes('=')) {
            try {
                setDisplay(eval(display));
            } catch (error) {
                setDisplay('Error');
            }
        } else {
            setDisplay(display + e.target.textContent);
        }
    }
    return (
        <div className={styles['wrapper']} data-testid="calculator-title">
           <h2>
                Calculator
           </h2>
           <Display display={display} variants='primary'/>
           {numbers.map((rows) => {
                return (
                     <div role="row" key={rows.join('')}>
                          {rows.map((number) => {
                            return (
                                 <button key={number} onClick={handlerEvent} className={styles['button']}>
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