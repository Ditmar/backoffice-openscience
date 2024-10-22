import React, { useState } from 'react';
import styles from './Toggle.module.scss';

export interface ToggleProps {
    label?: string;
    disabled?: boolean;
    onChange?: (Checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ label = '', disabled = false, onChange})=>{
    const [checked, setChecked] = useState(false);

    const handleToggle = () =>{
        if(!disabled){
            const newChecked = !checked;
            setChecked(newChecked);
            if (onChange) onChange(newChecked);
        }
    };

return (
    <label className={`${styles.toggleContainer} ${disabled ? styles.disabled : ''}`}>
    {label && <span className={styles.toggleLabel}>{label}</span>}
    <button
    className={`${styles.toggle} ${checked ? styles.checked : ''}`}
    onClick={handleToggle}
    disabled={disabled}
    aria-pressed={checked}
    aria-label={label || 'Toggle'}
    >
        <span className={styles.toggleSlider}/>
     </button>
    </label>  
    );
};

export default Toggle;