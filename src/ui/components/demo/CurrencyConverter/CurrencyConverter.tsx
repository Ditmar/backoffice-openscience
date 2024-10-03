import { useState } from 'react';
import styles from './styles.module.scss';

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(11.9);
  const [result, setResult] = useState(0);
  const convertHandler = () => {
    setResult(amount * currency);
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Currency Converter</h2>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => {
            setAmount(parseFloat(e.target.value));
          }}
        />
      </div>
      <div>
        <select
          value={currency}
          onChange={(e) => {
            setCurrency(parseFloat(e.target.value));
          }}
        >
          <option value={11.9}>$us</option>
          <option value={7.62}>€eu</option>
          <option value={0.96}>₹in</option>
        </select>
      </div>
      <div>
        <button onClick={convertHandler}>Convert</button>
      </div>
      <div>{result} Bs.</div>
    </div>
  );
}
export default CurrencyConverter;
