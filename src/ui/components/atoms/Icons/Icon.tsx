import React from 'react';
import type { IProps } from './types/IProps';
import styles from './Icon.module.scss';

const icons = {
  "document-settings": require('../icons/document-settings.svg').default,
  "hexagon-settings": require('../icons/hexagon-settings.svg').default,
  "sun": require('../icons/sun.svg').default,
  "document-edit": require('../icons/document-edit.svg').default,
  "book-open": require('../icons/book-open.svg').default,
  "text-align": require('../icons/text-align.svg').default,
  "image-search": require('../icons/image-search.svg').default,
  "monitor-settings": require('../icons/monitor-settings.svg').default,
  "seo-gear": require('../icons/seo-gear.svg').default,
  "upload-arrow": require('../icons/upload-arrow.svg').default,
  "user-settings": require('../icons/user-settings.svg').default,
  "text-menu": require('../icons/text-menu.svg').default,
};

function Icon(props: IProps) {
    const { name, className, size = 'medium' } = props;

    const sizeClass = typeof size === 'number' 
        ? { width: `${size}px`, height: `${size}px` }
        : styles[`icon-${size}`];

    try {
        const IconComponent = require(`../assets/icons/${name}.svg`).default;
        return <IconComponent className={`${styles.icon} ${className}`} 
        style={typeof size === 'number' ? sizeClass : {}}/>;
        
    } catch (error) {
        return <span className={styles.error}>Icon not found</span>;
    }
}

export default Icon;

