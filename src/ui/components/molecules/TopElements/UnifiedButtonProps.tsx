import React from 'react';
import PrimaryButton from '../../atoms/Primary-Button/PrimaryButton';
import SecondaryButton from '../../atoms/SecondaryButton/SecondaryButton';
import DangerButton from '../../atoms/DangerButton/Danger-Button';

interface UnifiedButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  display?: string;
}

function UnifiedButton({ variant, children, onClick, icon, display }: UnifiedButtonProps) {
  switch (variant) {
    case 'primary':
      return (
        <SecondaryButton onClick={onClick} display={display ?? 'defaultDisplay'} variant="White">
          {children}
        </SecondaryButton>
      );
    case 'secondary':
      return (
        <PrimaryButton onClick={onClick} icon={icon} display={display} variant="Centered">
          {children}
        </PrimaryButton>
      );
    case 'tertiary':
      return (
        <DangerButton onClick={onClick} variant="Standard">
          {children}
        </DangerButton>
      );
    default:
      return null;
  }
}

UnifiedButton.defaultProps = {
  onClick: () => {},
  icon: '',
  display: 'defaultDisplay',
};

export default UnifiedButton;
