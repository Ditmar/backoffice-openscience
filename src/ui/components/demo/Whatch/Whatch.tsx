import { useEffect, useState } from 'react';
import styles from './whatch.module.scss'
function WatchRealtime () {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalInstance = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalInstance);
        }
    }, []);
    
    return <div className={styles['wrapper']}>
        {time.toLocaleTimeString()}
    </div>
}
export default WatchRealtime;