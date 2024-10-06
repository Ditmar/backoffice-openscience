import React from 'react';

export interface IProps {
    name: string;
    size?: string;
    className?: string;
    styles?: React.CSSProperties;
    ['data-testid']?: string;
}

