import React from 'react';

export interface ISideMenuProps {
    menuItems: {
      title: string;
      icon: string;
      path: string;
      basePath: string;
    }[];
    onHideMenu?: () => void;
  }
  
  