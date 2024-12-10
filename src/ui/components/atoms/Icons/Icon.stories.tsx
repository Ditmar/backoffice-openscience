
import Icon from './Icon';
import type { StoryObj, Meta } from '@storybook/react';

import bookopen from '../../../../assets/icons/book-open.svg?raw';
import documentedit from '../../../../assets/icons/document-edit.svg?raw';
import documentsettings from '../../../../assets/icons/document-settings.svg?raw';
import hexagonsettings from '../../../../assets/icons/hexagon-settings.svg?raw';
import imagesearch from '../../../../assets/icons/image-search.svg?raw';
import monitorsettings from '../../../../assets/icons/monitor-settings.svg?raw';
import seogear from '../../../../assets/icons/seo-gear.svg?raw';
import sun from '../../../../assets/icons/sun.svg?raw';
import textalign from '../../../../assets/icons/text-align.svg?raw';
import textmenu from '../../../../assets/icons/text-menu.svg?raw';
import uploadarrow from '../../../../assets/icons/upload-arrow.svg?raw';
import usersettings from '../../../../assets/icons/user-settings.svg?raw';


const meta = {
    title: 'ui/components/atoms/Icons',
    component: Icon,
    argTypes: {
    onClick: {
    action: 'click',
    },
  },
}as Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bookopen: Story = {
    args: {
        name: bookopen,
        size: '24px',
        className: 'book-open',
        'data-testid': 'book-open',
    },
};

export const Documentedit: Story = {
    args: {
        name: documentedit,
        size: '24px',
        className: 'document-edit',
        'data-testid': 'document-edit',
    },
};

export const Documentsettings: Story = {
    args: {
        name: documentsettings,
        size: '24px',
        className: 'document-settings',
        'data-testid': 'document-settings',
    },
};

export const Hexagonsettings: Story = {
    args: {
        name: hexagonsettings,
        size: '24px',
        className: 'hexagon-settings',
        'data-testid': 'hexagon-settings',
    },
};

export const Imagesearch: Story = {
    args: {
        name: imagesearch,
        size: '24px',
        className: 'image-search',
        'data-testid': 'image-search',
    },
};

export const Monitorsettings: Story = {
    args: {
        name: monitorsettings,
        size: '24px',
        className: 'monitor-settings',
        'data-testid': 'monitor-settings',
    },
};

export const Seogear: Story = {
    args: {
        name: seogear,
        size: '24px',
        className: 'seo-gear',
        'data-testid': 'seo-gear',
    },
};

export const Sun: Story = {
    args: {
        name: sun,
        size: '24px',
        className: 'sun',
        'data-testid': 'sun',
    },
};

export const Textalign: Story = {
    args: {
        name: textalign,
        size: '24px',
        className: 'text-align',
        'data-testid': 'text-align',
    },
};

export const Textmenu: Story = {
    args: {
        name: textmenu,
        size: '24px',
        className: 'text-menu',
        'data-testid': 'text-menu',
    },
};

export const Uploadarrow: Story = {
    args: {
        name: uploadarrow,
        size: '24px',
        className: 'upload-arrow',
        'data-testid': 'upload-arrow',
    },
};

export const Usersettings: Story = {
    args: {
        name: usersettings,
        size: '24px',
        className: 'user-settings',
        'data-testid': 'user-settings',
    },
};