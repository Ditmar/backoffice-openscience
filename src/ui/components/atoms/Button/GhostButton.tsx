import React from 'react';
import styles from './styles.module.scss';
import type { ButtonProps } from './types';
import { FaPlus } from 'react-icons/fa';

const GhostButton: React.FC<ButtonProps> = ({
    button,  // Cambié ghostbutton a button
    variant = 'default',
    size = 'medium',
    disabled = false,
    onClick,
}) => {
    const buttonClass = [
        styles['ghost-button'],
        styles[`ghost-button--${variant}`],
        styles[`ghost-button--${size}`],
        disabled ? styles['ghost-button--disabled'] : ''
    ].join(' ');

    return (
        <button
            data-testid="ghost-button"
            className={buttonClass}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            tabIndex={!disabled ? 0 : -1}
        >
            <FaPlus size={16} /> {/* Tamaño del ícono ajustado a 16x16px */}
            {button}
        </button>
    );
};

export default GhostButton;
