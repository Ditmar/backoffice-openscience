import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import ChildComponent from './ChildComponent';

function RealTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div className={styles.wrapper}>
      <ChildComponent time={time.toLocaleTimeString()} />
    </div>
  );
}
export default RealTime;
