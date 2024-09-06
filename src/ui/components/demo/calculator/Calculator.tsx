import { useState } from 'react';
import styles from './styles.module.scss'
const Calculator = () => {
    const numbersMap: string[][] = [['0', '1', '2', '3'], ['4', '5', '6', '7'], ['8', '9', 'ce','='], ['*', '-','/','+']];
    const [values, setValues] = useState<string>('');
    const handlerOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.textContent;
        setValues(values + value);
    }
    return (
        <div className={styles['wrapper']}>
            <h1>Calculator </h1>
            <div role="displayText">{values}</div>
            {
                numbersMap.map((items, index) => {
                    return <div key={index} role="row">{items.map((number, index) => {
                        return <button key={index} onClick={handlerOptions}>{number}</button>
                    })} </div>
                })
            }
        </div>
    );
};
export default Calculator;