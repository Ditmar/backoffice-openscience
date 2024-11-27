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
        <PrimaryButton onClick={onClick} icon={icon} display={display} variant="Medium">
          {children}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        <SecondaryButton onClick={onClick} display={display ?? 'defaultDisplay'} variant="medium">
          {children}
        </SecondaryButton>
      );
    case 'tertiary':
      return (
        <DangerButton onClick={onClick} variant="Normal">
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
