import React, { useState } from 'react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template = (args) => {
  const [isOn, setIsOn] = useState(args.isOn);

  const handleToggle = () => {
    if (!args.disabled) {
      setIsOn(!isOn);
    }
  };

  return <Toggle {...args} isOn={isOn} onToggle={handleToggle} />;
};


export const Enabled = Template.bind({});
Enabled.args = {
  headerText: 'Toggle lavel', 
  labelOn: 'On',      
  labelOff: 'Off',    
  isOn: true,        
  disabled: false,   
};



export const Hover = Template.bind({});
Hover.args = {
  headerText: 'Toggle lavel',
  labelOn: 'On',
  labelOff: 'Off',
  isOn: true, 
  disabled: false,
};
export const Hover = Template.bind({});
Hover.args = {
  headerText: 'Toggle lavel',
  labelOn: 'On',
  labelOff: 'Off',
  isOn: true, 
  disabled: false,
};

export const ToggleStateChange = Template.bind({});
ToggleStateChange.args = {
  headerText: 'Toggle lavel',
  labelOn: 'On',
  labelOff: 'Off',
  isOn: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  headerText: 'Toggle lavel',
  labelOn: 'On',
  labelOff: 'Off',
  isOn: true,
  disabled: true, // Toggle deshabilitado
};
